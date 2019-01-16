Ext.define('starter.overrides.chart.series.Pie', {
	override: 'Ext.chart.series.Pie',

	/** 
	 *	By default, the legend only renders the value of the labelField. The override allows for the legend text
	 *	to be dynamic and use other values from the chart's record.
	 *	
	 *	Example:
	 *	legendTextRenderer: function(record) {
	 *		return record.get('name') + ' - ' + record.get('totalCount');
	 *	}
	 *
	 *	@param {Ext.data.Model} [record] The chart's record that is used to populate the legend store's record.
	 *	@return {String} The text to render for the item's legend text.
	 */
	legendTextRenderer: undefined,

	/**
	 *	Provide legend information to target array.
	 *
	 *	@param {Array} target
	 *
	 *	The information consists.
	 *	@param {String} target.name
	 *	@param {String} target.mark
	 *	@param {Boolean} target.disabled
	 *	@param {String} target.series
	 *	@param {Number} target.index
	 */
	provideLegendInfo: function(target) {
		var me = this,
			store = me.getStore();

		if (store) {
			var items = store.getData().items,
				labelField = me.getLabel().getTemplate().getField(),
				xField = me.getXField(),
				hidden = me.getHidden(),
				i, style, fill;

			for (var i = 0; i < items.length; i++) {
				style = me.getStyleByIndex(i);
				fill = style.fillStyle;

				if (Ext.isObject(fill)) {
					fill = fill.stops && fill.stops[0].color;
				}

				target.push(Ext.apply({
					name: labelField ? String(items[i].get(labelField)) : xField + ' ' + i,
					disabled: hidden[i],
					series: me.getId(),
					index: i
				}, Ext.isFunction(me.legendTextRenderer) ? {
					name: me.legendTextRenderer(items[i])
				} : {}));
			}
		}
	}
});