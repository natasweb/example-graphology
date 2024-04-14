const Graph = require('graphology')
const _ = require('lodash')
const data = require('./data')

const graph = new Graph()
const networkInGroup = []

// データ読み込み
const columnData = data.getDefColumnsBaseJsonData()
const matrixData = data.getMIMatrixJsonData()

// 目的変数
const objectVariable = _.find(matrixData, { cname: _.find(columnData, { obj: true }).cname })
// ノード用データ作成
const nodes = _.chain(matrixData)
  .filter((matrix) => matrix.cname !== objectVariable.cname)
  .map((matrix) => {
    const column = _.find(columnData, { cname: matrix.cname })
    return {
      id: matrix.cname,
      attr: {
        group1: column.color_category,
        mi: objectVariable[matrix.cname]
      }
    }
  })
  .value()
console.log('🚀 ~ nodes:', nodes)
// エッジ用データ作成
const edges = _.chain(matrixData)
  .filter((matrix) => matrix.cname !== objectVariable.cname)
  .map((matrix) =>
    _.chain(matrix)
      // NOTE: 連想配列を配列へ変換
      .toPairs()
      // NOTE: 行頭を削除
      .filter(([k]) => k !== 'cname')
      // NOTE: 0.6以上のエッジを登録
      .filter(([, v]) => v >= 0.6)
      .map(([k]) => ({ source: matrix.cname, target: k }))
      .value()
  )
  .flatMap()
  .value()
console.log('🚀 ~ edges:', edges)

// ネットワーク作成
for (const node of nodes) {
  graph.addNode(node.id, node.attr)
}
for (const edge of edges) {
  graph.addEdge(edge.source, edge.target)
}

// データを作成
const gruoping = (key, group1, group2) => {
  graph.setNodeAttribute(key, 'group2', group2)
  graph.forEachNeighbor(key, (neighbor, attributes) => {
    if (attributes.group1 === group1 && !attributes.group2) {
      graph.setNodeAttribute(neighbor, 'group2', group2)
      gruoping(neighbor, group1, group2)
    }
  })
}

const variables = _.filter(columnData, (column) => !column.obj)
for (let i = 0, trush = []; i < variables.length; i++) {
  if (_.includes(trush, variables[i].cname)) continue
  const key = variables[i].cname
  const group1 = variables[i].color_category
  const group2 = `group${i}`
  gruoping(key, group1, group2)

  const t = graph.filterNodes((node, attributes) => attributes.group2 === group2)
  trush.push(...t)
  networkInGroup.push(t)
}
console.log('🚀 ~ networkInGroup:', networkInGroup)
