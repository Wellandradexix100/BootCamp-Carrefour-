function getAdmins(map){
	let admin =[];
	for([key, value] of map) {
		if(value === 'admin') {
			admins.push(key);
		}

	}
	return admins;
}		

const usuarios = new map();

usuarios.set('luiz', 'admin');
usuarios.set('stephany', 'admin');
usuarios.set('jorge', 'user');
usuarios.set('natália', 'admin');