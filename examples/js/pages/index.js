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
			// {'negative':true}
			$result.val(wsptools.convert.string.decimal(value, {'negative':true}));
		}else{
			$result.val('');
		}

	});
	$convert_string_decimal.trigger('keyup');

});