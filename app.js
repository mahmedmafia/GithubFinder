//Globals 
const gitHub = new GitHub();
const ui=new UI();
//Seach Input
const searchUser = document.getElementById('searchUser');

//Event Listener

searchUser.addEventListener('keyup', (e) => {
    //Get inputText
    const userText = e.target.value;
    if (userText != '') {
        gitHub.getUser(userText)
            .then(data => {
                if (data.profile.message == "Not Found") {
                    //Show Alert
                    ui.showAlert("User Not Found","alert alert-danger");

                }else{
                    //Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }

            });
    } else {
        //Clear Profile
        ui.clearProfile();
        
    }


    e.preventDefault();
});