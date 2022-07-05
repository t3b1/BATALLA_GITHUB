const inputuser1 = document.querySelector('#input1'),
      btnuser1 = document.querySelector('#btn-user1'),
      inputuser2 = document.querySelector('#input2'),
      btnuser2 = document.querySelector('#btn-user2');

btnuser1.addEventListener('click' , (async () => {
    try {
        const datos = await fetch('https://api.github.com/users/${inputuser1}')
        const usergit = await datos.json()
        console.log(usergit)
    } catch (error) {
        console.log(error)
    }
})
)
