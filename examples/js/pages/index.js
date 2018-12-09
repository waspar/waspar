$(function () {

	if(!window.wsptools){
		console.error('wsptools not found');
		return false;
	}

	let $convert_string_decimal = $('.convert-string-decimal');

	$convert_string_decimal.on('keyup', function (event) {
		event.stopPropagation();
		event.preventDefault();

		let $this = $(this);
		let $box = $this.parents('.convert-string-decimal-box');
		let $result = $box.find('.convert-string-decimal-result');

		let value = $this.val();

		if(value || value === 0){
			let oConvert = new wsptools.convert.string.decimal(value);
			$result.val(oConvert.convert());
		}else{
			$result.val('');
		}

	});
	$convert_string_decimal.trigger('keyup');

});