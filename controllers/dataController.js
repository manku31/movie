// module.exports.movieData = function (req, res) {
//     fetchData((object) => { 
//         res.render("home", {obj: object});
//     });

//     function fetchData(callBack) {
//         fetch("`https://www.omdbapi.com/?apikey=86de156e&s=iron").then(res => res.json()).then(res => {
//             return callBack(res);
//         })
//         .catch(err => {
//             console.log(JSON.stringify(err));
//         });
//     }
// } 