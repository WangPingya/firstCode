const testData = [
{
  name: 'Properties',
  children: [
    {
    name: 'Setup',
    children: []
    },
    {
    name: 'Components',
    children: [
      {
        name: 'Specifications'
      },
      {
        name: 'Molecular Structure',
        children: []
      },
      {
        name: 'Assay/Blend'
      },
      {
        name: 'Light End Properties'
      },
      {
        name: 'Petro Characterization',
        children: []
      },
      {
        name: 'Pseudocomponents'
      },
      {
        name: 'Component Attributes'
      },
      {
        name: 'Henry Comps'
      },
      {
        name: 'UNIFAC Groups'
      },
      {
        name: 'Polymers',
        children: []
      }
    ]
  },
  {
    name: 'Methods',
    children: [
      {
        name: 'Specifications'
      },
      {
        name: 'Selected Methods'
      },
      {
        name: 'Parameters',
        children: []
      },
      {
        name: 'Routes'
      },
      {
        name: 'NC Props'
      },
      {
        name: 'Tabpoly'
      }
    ]
  },
  {
    name: 'Chemistry'
  },
  {
    name: 'Property Set',
  },
  {
    name: 'Data'
  },
  {
    name: 'Estimation',
    children: []
  },
  {
    name: 'Analysis',
  },
  {
    name: 'Customize',
    children: []
  },
  {
    name: 'Results',
    children: []
  }
  ]
},
{
  name: 'Simulation',
  children: [
    {
      name: 'Setup',
      children: []
    },
    {
      name: 'Property Sets'
    },
    {
      name: 'Analysis'
    },
    {
      name: 'Flowsheet',
      children: []
    },
    {
      name: 'Streams'
    },
    {
      name: 'Blocks'
    },
    {
      name: 'Utilities'
    },
    {
      name: 'Reactions'
    },
    {
      name: 'Convergence',
      children: []
    },
    {
      name: 'Flowsheeting Options',
      children: []
    },
    {
      name: 'Model Analysis Tools',
      children: []
    },
    {
      name: 'EO Configuration',
      children: []
    },
    {
      name: 'Results Summary',
      children: []
    },
    {
      name: 'Dynamic Configuration',
      children: []
    },
    {
      name: 'Plant Data',
      children: []
    }
  ]
}
]

const specificationsData = [{
  name: 'Methane(C1)',
  cas: '74-82-8',
  formula: 'CH4',
  dataBase: 'DWSIM'
  }, {
  name: 'Ethane(C2)',
  cas: '74-84-0',
  formula: 'C2H6',
  dataBase: 'DWSIM'
  }, {
  name: 'Propane(C3)',
  cas: '74-98-6',
  formula: 'C3H8',
  dataBase: 'DWSIM'
  }, {
  name: 'n-Butane(nC4)',
  cas: '106-97-8',
  formula: 'C4H10',
  dataBase: 'DWSIM'
  }, {
  name: 'lsobutane(iC4)',
  cas: '75-28-5',
  formula: 'C4H10',
  dataBase: 'DWSIM'
  }, {
  name: 'n-Pentane(nC5)',
  cas: '109-66-0',
  formula: 'C5H12',
  dataBase: 'DWSIM'
  }, {
  name: 'isopentane(iC5)',
  cas: '78-78-4',
  formula: 'C5H12',
  dataBase: 'DWSIM'
  }, {
  name: 'n-Hexane(nC6)',
  cas: '110-54-3',
  formula: 'C6H14',
  dataBase: 'DWSIM'
  }, {
  name: 'n-Heptane(nC7)',
  cas: '142-82-5',
  formula: 'C7H16',
  dataBase: 'DWSIM'
  }, {
  name: 'n-Octane(nC8)',
  cas: '111-65-9',
  formula: 'C8H18',
  dataBase: 'DWSIM'
}]

const methodS = [
  'FPROPS','CoolProp','Steam Tables(IAPWS-IF97)','IAPWS-08 Seawater','PC-SAFT','Peng-Robinson(PR)','Peng-Robinson-Stryjek-Vera 2(PRSV2-M)',
  'Peng-Robinson-Stryjek-Vera 2(PRSV2-VL)','Soave-Redlich-Kwong(SRK)','Peng-Robinson/Lee-Kesler(PR/LK)','UNIFAC','UNIFAC-LL','Modified UNIFAC(Dortmund)'
]

const getData = () => {
  return new Promise((resolve, reject) => {
    const r = Math.random() * 100
    if (r > 10) {
      setTimeout(() => {
        resolve({
          data: testData,
          sData: specificationsData,
          msData: methodS,
          code: 200
        })
      }, 100)
    } else {
      reject({
        msg: '内部错误',
        code: 500
      })
    }
  })
}

export {getData}