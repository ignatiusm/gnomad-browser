/* eslint-disable max-len */
/* eslint-disable indent */
export default (onHeaderClick, width) => {
  const mediumSize = (width < 1100)
  return {
    fields: [{
        dataKey: 'variant_id',
        title: 'Variant ID',
        dataType: 'variantId',
        onHeaderClick,
        width: 120
      }, {
        dataKey: 'hgvsc_canonical',
        title: 'HGVSc',
        dataType: 'string',
        width: 80,
        onHeaderClick,
      }, {
        dataKey: 'hgvsp_canonical',
        title: 'HGVSp',
        dataType: 'string',
        width: 80,
        onHeaderClick,
      }, {
        dataKey: 'ac_case',
        title: 'AC Case',
        dataType: 'integer',
        onHeaderClick,
        width: 60
      }, {
        dataKey: 'an_case',
        title: 'AN Case',
        dataType: 'integer',
        onHeaderClick,
        width: 60
      }, {
        dataKey: 'af_case',
        title: 'AF Case',
        dataType: 'exponential',
        onHeaderClick,
        width: 70
      }, {
        dataKey: 'ac_ctrl',
        title: 'AC Ctrl',
        dataType: 'integer',
        onHeaderClick,
        width: 60
      }, {
        dataKey: 'an_ctrl',
        title: 'AN Ctrl',
        dataType: 'integer',
        onHeaderClick,
        width: 60
      }, {
        dataKey: 'af_ctrl',
        title: 'AF Ctrl',
        dataType: 'exponential',
        onHeaderClick,
        width: 70
      },
      {
        dataKey: 'consequence',
        title: 'Consequence',
        dataType: 'consequence',
        onHeaderClick,
        width: 100
      },
      {
        dataKey: 'pval_meta',
        title: 'P-Val',
        dataType: 'float',
        onHeaderClick,
        disappear: mediumSize,
        width: 60
      }, {
        dataKey: 'estimate',
        title: 'Estimate',
        dataType: 'float',
        onHeaderClick,
        disappear: width < 1200,
        width: 60
      },
      // {
      //   dataKey: 'allele_freq',
      //   title: 'allele_freq',
      //   dataType: 'float',
      //   onHeaderClick,
      //   disappear: mediumSize,
      //   width: 80
      // },
    ],
  }
}
