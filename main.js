$(document).ready(function(){
	$.getJSON("http://json-data.herokuapp.com/forms", function(data){
		var htmlStr = ""

		data.forEach(function(field){

			if ( field.type === 'text' || field.type === 'email' || field.type === 'tel'){
				htmlStr += `<input type="${field.type}" placeholder="${field.label}" id="${field.id}"></input>`
			}	

			if ( field.type === 'select') {
				htmlStr += `<select id=${field.id}
					<option value=''>${field.label}</option>`

					field.options.forEach(function(option){
						htmlStr += `<option value="${option.value}"">${option.label}</option>`
					})

				htmlStr =+ `</select>`

			}

			if (field.type === 'textarea') {
				htmlStr += `<textarea id="${field.id}" placeholder="${field.label}"></textarea>`

			}

		})

		$("#app").html(htmlStr)
	})

})