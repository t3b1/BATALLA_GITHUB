const inputuser1 = document.querySelector('#input1'),
      btnuser1 = document.querySelector('#btn-user1');

const repos1 = document.querySelector('.card-user1 .public_repos'),
      followers1 = document.querySelector('.card-user1 .followers'),
      following1 = document.querySelector('.card-user1 .following'),
      gists1 = document.querySelector('.card-user1 .public_gists'),
      total1 = document.querySelector('.card-user1 .total');


const inputuser2 = document.querySelector('#input2'),
      btnuser2 = document.querySelector('#btn-user2');

const repos2 = document.querySelector('.card-user2 .public_repos'),
      followers2 = document.querySelector('.card-user2 .followers'),
      following2 = document.querySelector('.card-user2 .following'),
      gists2 = document.querySelector('.card-user2 .public_gists'),
      total2 = document.querySelector('.card-user2 .total');

btnuser1.addEventListener('click' , async () => {
    const username1 = inputuser1.value.trim();

    if(username1 == ""){
        return;
    }
    else {
        try {
            const datos = await fetch(`https://api.github.com/users/${username1}`)
            const userGit = await datos.json()

            repos1.textContent = userGit.public_repos
            gists1.textContent = userGit.public_gists
            followers1.textContent = userGit.followers
            following1.textContent = userGit.following

            total1.textContent = userGit.public_gists + userGit.public_repos + userGit.followers + userGit.following
                    
            } catch (error) {
                    console.log(error)
            }
    }
    }
)

btnuser2.addEventListener('click' , async () => {
    const username2 = inputuser2.value.trim();

    if(username2 == ""){
        return;
    }
        try {
            const datos = await fetch(`https://api.github.com/users/${username2}`)
            const userGit = await datos.json()

            repos2.textContent = userGit.public_repos
            gists2.textContent = userGit.public_gists
            followers2.textContent = userGit.followers
            following2.textContent = userGit.following

                    total2.textContent = userGit.public_gists + userGit.public_repos + userGit.followers + userGit.following
                    

            } catch (error) {
                    console.log(error)
            }
    }
)

document.getElementById('btn-batalla').addEventListener('click', function () {
  
    if (total1.textContent == '' || total2.textContent == '') {
      return;
    }
    console.log('msj');
  
    let msj = ''
    const totaluser1 = parseInt(total1.textContent)
    const totaluser2 = parseInt(total2.textContent)
    
    if (totaluser1 > totaluser2) {
      msj = 'Usuario 1 gana esta ronda'
    } else if (totaluser1 < totaluser2) {
      msj = 'Usuario 2 gana esta ronda'
    } else {
      msj = 'Hay un empate!!!'
    }
  
    Swal.fire(
      'tenemos un campeon',
      msj,
      'success'
    )
  })
