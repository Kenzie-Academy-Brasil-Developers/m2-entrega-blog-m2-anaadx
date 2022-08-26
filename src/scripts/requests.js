class ApiRequests {

    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("S5-10: token")
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async login(body) {

        const userLogin = await fetch (`${this.baseUrl}/users/login`,{

           method: "POST", 
           headers: this.headers,
           body: JSON.stringify(body)
        })

        .then(res => res.json())
        .then(res => {
            console.log(res)
            localStorage.setItem("S5-10: userId", res.userId)
            localStorage.setItem("S5-10: token", res.token)
            })

        .catch(err => console.log(err))
        return userLogin
    }

    static async cadastrar(body) {

        const newUser = await fetch (`${this.baseUrl}/users/register `,{

        method : "POST",
        headers: this.headers,
        body: JSON.stringify(body)
    })

    .then(res => res.json())
    .then(res => {
        console.log(res)
        localStorage.setItem("S5-10: userId", res.userId)
        localStorage.setItem("S5-10: token", res.token)   
    })

        .catch(err => console.log(err))
        return newUser
    }

    static async getPosts() {

        const posts = await fetch (`${this.baseUrl}/posts?page=1`, {
            method : "GET",
            headers: this.headers,
            
        })    
        
        .then (res => res.json())
        .catch (err => console.log(err))

        return posts
    }

    static async createPost (body) {
        const newPosts = await fetch (`${this.baseUrl}/posts`, {
            method : "POST",
            headers: this.headers,body: JSON.stringify(body)
        })    
        
        .then (res => res.json())
        .catch (err => console.log(err))

        return newPosts
    }

    static async getUser() {
        const user = await fetch (`${this.baseUrl}/users/${localStorage.getItem("S5-10: userId")}`, {
            method : "GET",
            headers: this.headers,
        })    
        .then (res => res.json())
        .catch (err => console.log(err))

        return user
    }
}



export {ApiRequests}