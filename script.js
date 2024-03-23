function handleFormSubmit(event){
    event.preventDefault();

    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    
    const userDetails = {
        username : name ,
        email : email,
        phone : phone
    }

    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    showUserONScreeen(userDetails);
}
function showUserONScreeen(userDetails){
    const parentList = document.getElementById('listItem');
    const listItem = document.createElement('li');
   
listItem.textContent = `${userDetails.username}, ${userDetails.email}, ${userDetails.phone}`;
   
    parentList.appendChild(listItem);
}

