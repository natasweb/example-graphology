module.exports.getDefColumnsBaseJsonData = () => {
  const data = []
  // オブジェクト変数
  data.push({ cname: 'col000', color_category: 'group1', obj: true })

  // グループ１の集合１
  data.push({ cname: 'col001', color_category: 'group1', obj: false })
  data.push({ cname: 'col002', color_category: 'group1', obj: false })
  data.push({ cname: 'col003', color_category: 'group1', obj: false })
  data.push({ cname: 'col004', color_category: 'group1', obj: false })
  data.push({ cname: 'col005', color_category: 'group1', obj: false })
  data.push({ cname: 'col006', color_category: 'group1', obj: false })
  // グループ１の集合２
  data.push({ cname: 'col101', color_category: 'group1', obj: false })
  data.push({ cname: 'col102', color_category: 'group1', obj: false })
  data.push({ cname: 'col103', color_category: 'group1', obj: false })
  data.push({ cname: 'col104', color_category: 'group1', obj: false })
  data.push({ cname: 'col105', color_category: 'group1', obj: false })
  // グループ１の浮遊ノード
  data.push({ cname: 'col201', color_category: 'group1', obj: false })
  data.push({ cname: 'col202', color_category: 'group1', obj: false })
  data.push({ cname: 'col203', color_category: 'group1', obj: false })
  data.push({ cname: 'col204', color_category: 'group1', obj: false })
  // グループ２の集合１
  data.push({ cname: 'col401', color_category: 'group2', obj: false })
  data.push({ cname: 'col402', color_category: 'group2', obj: false })
  data.push({ cname: 'col403', color_category: 'group2', obj: false })
  data.push({ cname: 'col404', color_category: 'group2', obj: false })

  // グループ３＆グループ４
  data.push({ cname: 'col501', color_category: 'group3', obj: false })
  data.push({ cname: 'col502', color_category: 'group3', obj: false })
  data.push({ cname: 'col503', color_category: 'group3', obj: false })
  data.push({ cname: 'col601', color_category: 'group4', obj: false })
  data.push({ cname: 'col602', color_category: 'group4', obj: false })
  data.push({ cname: 'col603', color_category: 'group4', obj: false })

  return data
}

module.exports.getMIMatrixJsonData = () => {
  const data = []

  // オブジェクト変数
  data.push({
    cname: 'col000',
    ...{ col001: 0.900, col002: 0.854, col003: 0.365, col004: 0.514, col005: 0.196, col006: 0.378 },
    ...{ col101: 0.485, col102: 0.624, col103: 0.127, col104: 0.315, col105: 0.614 },
    ...{ col201: 0.587, col202: 0.345, col203: 0.364, col204: 0.101 },
    ...{ col401: 0.326, col402: 0.165, col403: 0.687, col404: 0.731 }
  })
  // グループ１の集合１（col0xxに関係するデータ）
  data.push({ cname: 'col001', col001: 0.0, col002: 0.6, col003: 0.6, col004: 0.0, col005: 0.0, col006: 0.6 })
  data.push({ cname: 'col002', col001: 0.6, col002: 0.0, col003: 0.0, col004: 0.6, col005: 0.6, col006: 0.6 })
  data.push({ cname: 'col003', col001: 0.6, col002: 0.0, col003: 0.0, col004: 0.0, col005: 0.0, col006: 0.6 })
  data.push({ cname: 'col004', col001: 0.0, col002: 0.6, col003: 0.0, col004: 0.0, col005: 0.0, col006: 0.0 })
  data.push({ cname: 'col005', col001: 0.0, col002: 0.6, col003: 0.0, col004: 0.0, col005: 0.0, col006: 0.0 })
  data.push({ cname: 'col006', col001: 0.0, col002: 0.6, col003: 0.6, col004: 0.0, col005: 0.0, col006: 0.0 })
  // グループ１の集合２（col1xxに関係するデータ）
  data.push({ cname: 'col101', col101: 0.0, col102: 0.6, col103: 0.6, col104: 0.6, col105: 0.0 })
  data.push({ cname: 'col102', col101: 0.0, col102: 0.0, col103: 0.0, col104: 0.0, col105: 0.6 })
  data.push({ cname: 'col103', col101: 0.0, col102: 0.0, col103: 0.0, col104: 0.0, col105: 0.6 })
  data.push({ cname: 'col104', col101: 0.6, col102: 0.0, col103: 0.0, col104: 0.0, col105: 0.0 })
  data.push({ cname: 'col105', col101: 0.0, col102: 0.6, col103: 0.6, col104: 0.0, col105: 0.0 })
  // グループ１の浮遊ノード（col2xxに関係するデータ）
  data.push({ cname: 'col201', col201: 0.0, col202: 0.1, col203: 0.2, col204: 0.3 })
  data.push({ cname: 'col202', col201: 0.4, col202: 0.0, col203: 0.5, col204: 0.1 })
  data.push({ cname: 'col203', col201: 0.3, col202: 0.2, col203: 0.0, col204: 0.5 })
  data.push({ cname: 'col204', col201: 0.1, col202: 0.5, col203: 0.4, col204: 0.0 })
  // グループ２の集合１（col4xxに関係するデータ）
  data.push({ cname: 'col401', col401: 0.0, col402: 0.6, col403: 0.0, col404: 0.0 })
  data.push({ cname: 'col402', col401: 0.6, col402: 0.0, col403: 0.6, col404: 0.0 })
  data.push({ cname: 'col403', col401: 0.0, col402: 0.6, col403: 0.0, col404: 0.0 })
  data.push({ cname: 'col404', col401: 0.6, col402: 0.0, col403: 0.0, col404: 0.0 })

  // グループ３＆グループ４
  data.push({ cname: 'col501', col501: 0.0, col502: 0.6, col503: 0.6, col601: 0.6, col602: 0.0, col603: 0.0 })
  data.push({ cname: 'col502', col501: 0.6, col502: 0.0, col503: 0.6, col601: 0.0, col602: 0.6, col603: 0.0 })
  data.push({ cname: 'col503', col501: 0.6, col502: 0.6, col503: 0.0, col601: 0.0, col602: 0.0, col603: 0.6 })
  data.push({ cname: 'col601', col501: 0.6, col502: 0.0, col503: 0.0, col601: 0.0, col602: 0.6, col603: 0.0 })
  data.push({ cname: 'col602', col501: 0.0, col502: 0.6, col503: 0.0, col601: 0.6, col602: 0.0, col603: 0.6 })
  data.push({ cname: 'col603', col501: 0.0, col502: 0.0, col503: 0.6, col601: 0.6, col602: 0.6, col603: 0.0 })

  return data
}
