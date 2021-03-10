//使用innerHTML必須用append的方式加入一個createElement，且要請求三次不然資料會被蓋過
// const userName = document.querySelector(".name")
// const img = document.querySelector("img")
// const email = document.querySelector(".email")
const button = document.querySelector("button")
button.addEventListener('click', event => {  //  錯誤的用法get當中的results一定不要少了s!!!!
  for (let time = 0; time < 3; time++) { //使用innerHTML要請求三次，迴圈放在axios之前，跟model answer中放response後自動results印出3性質不一樣
    axios
      //用innerHTML的方式要用請求三次的方式不然資料會被蓋過
      .get('https://randomuser.me/api/?gender=female') //請看網站documentation中的random user generator
      // .then(response =>{ 和 .then((response)=>{，的意義不同，一個是把response當作參數，一個是
      .then((response) => {
        // debugger;
        console.log('response', response)

        // for (let time = 0; time < 3; time++) {  //雖然在網址上已經resquse了3個user的資料，但是在這邊如果只單純放一個[0]那就只能顯示第一位user，剩下的2位user就是[1]、[2]，當然因為你請求result=3，如果[3]開始的第四位user都會錯誤!
        /// 重要!! results記得要加s
        const data = response.data.results[0]
        console.log('data', data)

        let userName = document.createElement('h3')//記住createElement之後是要放標籤類別而非標籤名，並且加''
        userName.innerHTML = data.name.first + ' ' + data.name.last //innerHTML不能用`${}`而要用+，至於中間' '是為了前名後名之間的空一格

        let img = document.createElement('img')
        img.src = data.picture.large

        let email = document.createElement('email')
        email.innerHTML = data.email

        console.log('userName', userName)
        console.log('img', img)
        console.log('email', email)
        // let div = document.createElement('div')
        // div.innerHTML = userHtmlData
        // console.log('div', div)

        let userRender = document.querySelector(".userRender")
        userRender.append(userName)
        userRender.append(img)
        userRender.append(email)

      })
      .catch((error) => {
        console.log('error', error)
      })
  }
})

