
const param = {
  common: {
    count: 100,
    codepends_list : ['nentuki','nen', 'class']
  },
  column: {
    nendo: {
      type: "year",
      start: 2020,
      end: 2020 + 11,
    },
    nentuki: {
      type: "nentuki_order",
      start: '2020/04',
      end: '2022/03',
    },
    nen: {
      type: "year_order",
      start: 2020,
      end: 2020 + 3,
    },
    sid: {
      type: "decimal_order",
      start: 1,
      end: 10,
      count_up: 2,
    },
    class: {
      type: "list_order",
      list: ["one","two","three","four","five","six",],
    },
    kigyo_mei: {
      type: "company",
      num: 15 + 4,
      strtype: "zen",
    },
    juwtstreem: {
      type: "head_string",
      head: "RFP303A",
      num: 5,
      strtype: "han",
    },
    kokyaku_no: {
      type: "varchar",
      num: 13,
      strtype: "han",
    },
    kokyaku_mei: {
      type: "varchar",
      num: 30,
      strtype: "zen",
    },
    type_a: {
      type: "select",
      select: ["a","b","c"],
    },
    type_b: {
      type: "static",
      static: "KOTEI"
    },
    plan_flg: {
      type: "varchar",
      num: 2,
      strtype: "han",
    },
    kingaku_a: {
      type: "decimal",
      num: 5,
    },
    kingaku_b: {
      type: "decimal",
      num: 10,
    },
    kingaku_c: {
      type: "decimal",
      max: 100,
      min: 10
    },
    update_date: {
      type: "datetime",
      start: "2024-01-01T00:00:00",
      end: "2024-06-30T23:59:59"
    },
  }
}
