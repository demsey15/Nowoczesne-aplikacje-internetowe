(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.library = []; 

    // BELOW SAMPLES SHOW STRUCTURE OF CATEGORY OBJECT AND STUCTURE OF BOOKS OBJECT INSIDE CATEGORY 
    //   
    // global.UAM.library.push({
    //     categoryName: 'Kryminał',
    //     books: []
    // });
    
    // global.UAM.library[0].books.push({
    //     title: 'Pan Tadeusz',
    //     count: 3
    // });
    
    //////////////////////////////////////////////////////////////////////////////////////

    // newCategoryName: String
    global.UAM.addCategory = function (newCategoryName) {
        // function should return new category object
		let newCategory = {
			categoryName: newCategoryName,
			books: []
		};
		
		global.UAM.library.push(newCategory);
		
		return newCategory;
    };

    // categoryObject: Object
    global.UAM.removeCategory = function (categoryObject) {
        // !!!
		let index = global.UAM.library.indexOf(categoryObject);
		
		if(index !== -1){
			global.UAM.library.splice(index, 1);
		}
    };

    // categoryObject: Object
    // title: String
    // count: Number 
    global.UAM.addBookToCategory = function(categoryObject, title, count) {
        // !!!
        // function should return new book object
		let newBook = { title, count };
			
		categoryObject.books.push(newBook);
		
		return newBook;
    };

    // categoryObject: Object
    // bookObject: Object
    global.UAM.removeBookFromCategory = function(categoryObject, bookObject) {
        // !!!
		let index = categoryObject.books.indexOf(bookObject);
		
		if(index !== -1){
			categoryObject.books.splice(index, 1);
		}
    };

    // categoryName: String
    global.UAM.getCategoryByName = function(categoryName) {
        // !!!
		// function should return category object
		let currentCategoryObject;
		for(let i = 0; i < global.UAM.library.length; i++){
			currentCategoryObject = global.UAM.library[i];
			
			if(currentCategoryObject.categoryName === categoryName){
				return currentCategoryObject;
			}
		}
        
		return null;
    };

    // title: String
    global.UAM.getBookByTitle = function(title) {
        // !!!
        // function should return book object
		let currentCategoryObject;
		let currentBook;
		
		for(let categoryIndex = 0; categoryIndex < global.UAM.library.length; categoryIndex++){
			currentCategoryObject = global.UAM.library[categoryIndex];
			
			for(let bookIndex = 0; bookIndex < currentCategoryObject.books.length; bookIndex++){
				currentBook = currentCategoryObject.books[bookIndex];
				
				if(currentBook.title === title){
					return currentBook;
				}
			}
		}
    };

    // bookObject: Object
    global.UAM.returnBook = function(bookObject) {
        // !!!
		//zwiększyć count
		bookObject.count++;
    };
    
    global.UAM.getBorrowedBooks = function() {
        // !!!
        // return array of book objects
		//takie, których count = 0
		
		let currentCategoryObject;
		let currentBook;
		
		let borrowedBooks = [];
		
		for(let categoryIndex = 0; categoryIndex < global.UAM.library.length; categoryIndex++){
			currentCategoryObject = global.UAM.library[categoryIndex];
			
			for(let bookIndex = 0; bookIndex < currentCategoryObject.books.length; bookIndex++){
				currentBook = currentCategoryObject.books[bookIndex];
				
				if(currentBook.count === 0){
					borrowedBooks.push(currentBook);
				}
			}
		}
		
		return borrowedBooks;
		
    };

}(window));
//przykład użycia nie do końca pasuje, będzie nowy plik na repo
//zadanie wrzucić na githuba i link wysłać na jeden z adresów (najlepiej na oba)
//do wtorku do 23:59
//przypadki krańcowe nas nie interesują (nie będą dodawane dwa razy te same ksiązki)
/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
