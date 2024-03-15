$(document).ready(function () {
  var dataSet = [
    {
      company: "A1 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A2 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A3 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A4 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A5 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A6 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A7 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A8 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A9 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A10 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A11 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A12 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A13 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A14 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A15 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A16 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A17 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
    {
      company: "A18 group",
      address:
        "53/2 ซ.พหลโยธิน 11 ถ.พหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพฯ 10400.",
      contact: "022796344",
      link: "https://www.dxplace.com",
    },
  ];

  $.extend(true, DataTable.defaults, {
    ordering: false,
    responsive: true,
    // select: {
    //   style: 'os',
    //   selector: 'td:first-child',
    //   blurable: true
    // },
    language: {
      url: "//cdn.datatables.net/plug-ins/2.0.2/i18n/th.json",
    },
    layout: {
      topStart: null,
      topEnd: null,
      bottomStart: "info",
      bottomEnd: "paging",
    },
    columnDefs: [
      { className: "dt-head-center", target: [0, 1, 2, 3, 4, 5, 6,7] },
      { className: "dt-body-center", target: [6] },
      // {
      //   target: 3,
      //   className: 'dt-body-center',
      //   render: (data)=> {
      //     return '<a href="'+data+'" target="_blank">ดาวโหลด</a>'
      //   }
      // }
    ],
  });

  $("#example").DataTable({
    columns: [
      {
        data: null,
        render: function (data, type, row, meta) {
          return '<input type="checkbox" name="row-select">';
        },
      },
      {
        data: null,
        width: 30,
        render: (data, type, row) => {
          return '<a href="#"><i class="bx bxs-pencil"></i></a>';
        },
      },
      {
        data: null,
        width: 30,
        render: (data, type, row) => {
          return '<a href="#"><i class="bx bxs-trash"></i></a>';
        },
      },
      {
        title: "บริษัท",
        data: "company",
        render: (data, type, row) => {
          return '<div class="fs-5 text-primary">'+data+'</div><div class="fs-5 text-primary">'+data+'</div>';
        },
      },
      {
        title: "สถานะ",
        data: null,
        render: (data, type, row) => {
          return '<span class="w-100 badge text-bg-success">Success</span>';
        },
      },
      {
        title: "สถานที่ตั้ง",
        data: "address",
      },
      {
        title: "เบอร์ติดต่อ",
        data: "contact",
        type: "string",
      },
      {
        title: "เว็บไซต์",
        data: "link",
        render: (data, type, row) => {
          return '<a href="' + data + '" target="_blank">ดาวโหลด</a>';
        },
      },
    ],
    data: dataSet,
  });

  $("#example tbody").on("click", 'input[type="checkbox"]', function () {
    var table = $("#example").DataTable();
    var data = table.row($(this).closest("tr")).data();
    console.log("Selected Row Data:", data);
  });
});
