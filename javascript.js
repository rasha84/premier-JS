
/*///////////vérifier les champs un par un  
function validateForm() {
	var Nom=document.getElementById("nom").value;
	var preNom=document.getElementById("prenom").value;
	var Mail=document.getElementById("mail").value;
	var Mess=document.getElementById("message").value;
	var Radios=document.getElementsByName("optradio");
		console.log(Radios);
		
		if (Radios[0].checked==false && Radios[1].checked==false){
			alert("Choisissez votre civilité");
			return false;
		}

	  if (Nom==""){
  	  alert('Entrer votre Nom');	
  	  Nom.focus();
   		return false;
    }
  	if (preNom==""){
   		alert('Entrer votre prenom');	
   		prenom.focus();
   		return false;
    }
    if (Mail==""){
  		alert('Entrer votre Mail');	
  		Mail.focus();
  		return false;
	  }
	  if (Mess==""){
 		  alert('Entrer votre Message');	
 		  Mess.focus();
 		  return false;
	  }

}
on peut appeler la fonction validatForm() par la méthode onclick 
/////////la deuxième façon à faire c'est event handler 
/*
let button = document.querySelector('.btn-info')
button.addEventListener('click', () => {
	validateForm()
	
})


*////// un message qui montre tous les champs manquants dans le formulaire 

function getFormValue(){
	var str = '';
	var elem = document.getElementById('mainForm').elements;
	
     for(var i = 0; i < elem.length; i++)
        {
        	if(elem[i].value==""){
        		str+=elem[i].name;
        		str+="\n"
        	}
        } 
        document.getElementById('lblValues').innerHTML = 'Veuillez entrer vos informations:\n' + str ;
        alert('Entrer les valeurs suivantes s\'il vous plait \n'+ str)
        console.log(str);
        
}