function sendRegisterData() {
    let formNickname = document.forms["registerArea"]["fnick"].value;
    let formMail = document.forms["registerArea"]["email"].value;
    let formPhone = document.forms["registerArea"]["phone"].value;
    const data = {name:`${formNickname}`, mail:`${formMail}`, phone:`${formPhone}`};
    const dataJSON = JSON.stringify(data);
    console.log(dataJSON);
}