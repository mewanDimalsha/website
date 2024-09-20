
// Exercise 1: Convert the following code from a callback hell to a promise chain:
// getCustomer(1)
//     .then(customer => {
//         console.log('Customer: ', customer);
//         if (customer.isGold) {
//             getTopMovies()
//                 .then(movies => {
//                     console.log('Top movies: ', movies);
//                     sendEmail(customer.email, movies)
//                         .then(() => console.log('Email sent...'));
//                 });
//         }
//     })
//     .catch(err => console.log('Error', err.message));
const notifyCustomer = async (id) => {
    try {
        const customer = await getCustomer(id);
        console.log('Customer: ', customer);
        if (customer.isGold) {
            const movies = await getTopMovies();
            console.log('Top movies: ', movies);
            await sendEmail(customer.email, movies);
            console.log('Email sent...');
        }
    } catch (err) {
        console.log('Error', err.message);
    }
};
    
// Example usage
notifyCustomer(1);

  function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ 
                id: id, 
                name: 'Mosh Hamedani', 
                isGold: true, 
                email: 'email' 
              });
        }, 4000);
    }); 
  }
  
  function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });
  }
  
  function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
  }