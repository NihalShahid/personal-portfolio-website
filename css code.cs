/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

/* Reset */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Background */
body{
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    overflow: hidden;
}

/* Portfolio Card */
body::before{
    content: "";
    position: absolute;
    width: 350px;
    height: 350px;
    background: rgba(255,255,255,0.15);
    border-radius: 50%;
    top: -80px;
    left: -80px;
}

body::after{
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    background: rgba(255,255,255,0.12);
    border-radius: 50%;
    bottom: -60px;
    right: -60px;
}

.container{
    width: 700px;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 50px;
    text-align: center;
    color: white;
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.3);
}

h1{
    font-size: 3rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
}

h1::after{
    content: "";
    display: block;
    width: 120px;
    height: 4px;
    background: #FFD700;
    margin: 15px auto;
    border-radius: 10px;
}

p{
    font-size: 1.2rem;
    line-height: 1.8;
    color: #f8f9fa;
}

.container:hover{
    transform: translateY(-8px);
    transition: 0.4s ease;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}