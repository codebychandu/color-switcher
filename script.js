const colors = document.querySelectorAll('.color');
        const body = document.querySelector('body');

        colors.forEach(function (col) {
            // console.log(col)
            col.addEventListener('click', function (listen) {
                console.log(listen);
                console.log(listen.target);
                // if (listen.target.id === 'gray') {
                //     body.style.backgroundColor = 'gray'
                // }
                // else if (listen.target.id === "green"){
                //     body.style.backgroundColor = "rgb(172, 254, 49)"
                // } 
                // else if (listen.target.id === 'white') {
                //     body.style.backgroundColor = 'white'
                // } 
                // else if (listen.target.id === 'black') {
                //     body.style.backgroundColor = 'black'
                // } 

                switch (listen.target.id) {
                    case 'gray':
                        body.style.backgroundColor = 'gray'
                        break;
                    case 'green':
                        body.style.backgroundColor = 'rgb(172, 254, 49)'
                        break;
                    case 'white':
                        body.style.backgroundColor = 'white'
                        break;
                    case 'black':
                        body.style.backgroundColor = 'black'
                        break;
                    // case 'purple':
                    //     body.style.backgroundColor = 'purple'
                    //     break;
                    default:
                        break;
                }
            })
        });