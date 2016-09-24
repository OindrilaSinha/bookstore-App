/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

  
    angular
        .module("BookStore")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
      

        var dataObj = {
            booksData: booksData
          
        };

      
        return dataObj;
    }
  
    var booksData = [
			{	"id":1,	
				"title": "One Indian Girl", "author": "Chetan Bhagat ", "language": "English", "description": "Hi, Im Radhika Mehta and Im getting married this week. I work at Goldman Sachs, an investment bank. Thank you for reading my story. However, let me warn you.You may not like me too much. One, I make a lot of money. Two, I have an opinion on everything. Three, I have had a boyfriend before. OK, maybe two.Now if all this was the case with a guy, one might be cool with it. But since I am a girl these three things I mentioned dont really make me too likeable, do they?..", "image_url":"app/images/one_indian_girl_by_chetan_bhagat.jpg", "price": 176, "Publisher": "Rupa Publications India Pvt Ltd", "Number_of_Pages": "157", "sold_out": "No", "ISBN_10": "8183071007", "ISBN_13": "978-8183071000", "Product_Dimensions": "11.5 x 5.7 x 18 cm","purchased":"yes",

				"review_details": [{ "Customer_Review": "3 ", "review_comment": "We are waiting for publishe", "review_by": "pinakgupta@gmail.com" }, { "Customer_Review": "3 ", "review_comment": "We are waiting for publishe", "review_by": "pinakgupta@gmail.com" }
				]
			},

			{	"id":2,	
				"title": "Inferno", "author": "Dan Brown ", "language": "English", "description": "Hi, Im Radhika Mehta and Im getting married this week. I work at Goldman Sachs, an investment bank. Thank you for reading my story. However, let me warn you.You may not like me too much. One, I make a lot of money. Two, I have an opinion on everything. Three, I have had a boyfriend before. OK, maybe two.Now if all this was the case with a guy, one might be cool with it. But since I am a girl these three things I mentioned dont really make me too likeable, do they?..", "image_url": "app/images/Inferno_img.jpg", "price": 157, "Publisher": "Transworld Digital (14 May 2013)", "Number_of_Pages": "578", "sold_out": "Yes", "ISBN_10": "8183071007", "ISBN_13": "978-8183071000", "Product_Dimensions": "11.5 x 5.7 x 18 cm","purchased":"yes",
				"review_details": [{ "Customer_Review": "4 ", "review_comment": "must read", "review_by": "pinakgupta@gmail.com" }]
			},

			{	"id":3,	
				"title": "Lean In: Women, Work, and the Will to Lead", "author": " Sheryl Sandberg ", "language": "English", "description": "Many intelligent women tend to leave their professional careers and become homemakers for various reasons. One of the vital reasons is that women find it impossible to balance the growing career pressure and meeting increasing family demands. Sheryl Sandberg, in this book 'Lean In: Women, Work and the Will to Lead' provides solution to this issue and guides women on how to find the perfect balance in life.", "image_url": "app/images/lean_in.jpg", "price": 236, "Publisher": " RHUK; 8 edition (12 March 2013)", "Number_of_Pages": "256 ", "sold_out": "No", "ISBN_10": " 0753541637", "ISBN_13": "978-0753541630", "Product_Dimensions": "13.5 x 1.8 x 21.6 cm","purchased":"yes",

				"review_details": [{ "Customer_Review": "5 ", "review_comment": "Being a youngster I could not relate to few things since I think our previous generation have gone through that to make our life easier in some cases.", "review_by": "Nayana Hanji" }, { "Customer_Review": "4 ", "review_comment": "i just read this book, and out of curiosity came to read online comments. and I'm floored at so much negativity against the author (more than against the book).", "review_by": "AD" }
				]
			},

			{	"id":4,	
				"title": "The Complete Sherlock Holmes: All 56 Stories & 4 Novels (Global Classics) Kindle Edition", "author": " Arthur Conan Doyle", "language": "English", "description": "Sherlock Holmes, the greatest fictional detective of the late 19th and early 20th centuries, was the creation of Scottish born author and physician Sir Arthur Conan Doyle. A brilliant London-based detective, Holmes is famous for his intellectual prowess, and is renowned for his skillful use of deductive reasoning and astute observation to solve difficult cases. He is arguably the most famous fictional detective ever created, and is one of the best known and most universally recognizable literary characters in any genre.", "image_url": "app/images/sherlok.jpg", "price": 80, "Publisher": "GENERAL PRESS; 1 edition (21 July 2016)", "Number_of_Pages": "378", "purchased":"yes","sold_out": "Yes", "ISBN_10": " B00X6KZ6SW", "ISBN_13": "8183071000", "Product_Dimensions": "11.5 x 5.7 x 18 cm",
				"review_details": [{ "Customer_Review": "3 ", "review_comment": "These books cover all of Sherlock's adventures (except for 'Sherlock Holmes baffled' I guess). They actually take you to 221B Baker Street from 19th century, with the horse cabs, the old English language and the famous 221B Baker Street apartments.(Though sometimes you need a dictionary to understand words)", "review_by": "Saurabh Gawande" },
				{ "Customer_Review": "4 ", "review_comment": "Awesome book . Liked it very much .The content Was very nice but the alphabhet size is a bit small but not a problem .", "review_by": "Sam" }]
			},
				{	"id":5,	
				"title": "Wings of Fire: An Autobiography of Abdul Kalam", "author": "  Tiwari ", "language": "English", "description": "Dr. Kalam by narrating his life journey evokes the reader to identify with one’s inner fire and potential, for he was of the firm belief that each one of us was born with the strength and potential to make a tangible change in the world. How he inspired himself to achieve dreams and how he went about accomplishing so much is what the book captures nicely.The book recollects many anecdotes and stories from childhood, his time at school and college. The time spent at the Langley Research Center, NASA and Wallops Flight Facility gets a lot of attention.how he felt when conferred with many awards like the Padma Bhushan have been written in much detail.The second half of the book deals with Dr Kalam, the scientist who made a significant contribution in developing the countries guided missile program, a pioneering effort for the security of the nation. It's not with reason that he was nicknamed as the 'Missile Man of India'. The book also contains 24 photographs at various stages of his life.Authored by Dr APJ Abdul Kalam and Mr. Arun Tiwari, the 180 page book 'The Wings of Fire' was first published in the year 2000. Mr Tiwari is a well-known missile scientist who has worked with Dr. Kalam. Having become a bestseller, the book has even been translated into thirteen languages, which includes Chinese and French.", "image_url": "app/images/apj.jpg", "price": 142, "Publisher": "Universities Press; 1st edition (1999)", "Number_of_Pages": "180", "sold_out": "No", "ISBN_10": "8173711461", "ISBN_13": " 978-8173711466", "Product_Dimensions": " 15.9 x 1.1 x 23.9 cm","purchased":"yes",
				"review_details": [{ "Customer_Review": "4 ", "review_comment": "I read this book back in December 2012. This book is more than just a biography, it has lot more to offer. It motivates you and inspires you a lot. The best time to read this book is early morning. You will feel the pump. #respectkalam", "review_by": "Saurabh Gawande" },
				{ "Customer_Review": "5 ", "review_comment": "If you want to leave your footprints in the sands of time, do not drag your feet.", "review_by": "Ravi" }]
			},
				{"id":6,	
				"title": "Who Will Cry When You Die?", "author": " Robin Sharma", "language": "English", "description": "In yet another bestseller 'Who Will Cry When You Die?' Robin Sharma shares his experiences and inspirational wisdom about whether we are living life to its fullest or are merely existing, constantly haunted about fears of death and concerned whether there would be any pall bearers at our funeral or not.This self help and motivating book, in simple language draws out 101 ways by which we all could live a more carefree life and not sacrifice our today for a worried tomorrow.", "image_url":  "app/images/robin.jpg", "price": 261, "Publisher": "Jaico Publishing House; First edition (15 June 2006)", "Number_of_Pages": "256", "sold_out": "No", "ISBN_10": " 8179922324", "ISBN_13": "978-8179922323", "Product_Dimensions": "12.3 x 16.5 x 1.4 cm","purchased":"yes",
				"review_details": [{ "Customer_Review": "4 ", "review_comment": "The story is about a girl who fell in love with a guy-Boy proposed girl for marriage-Girl said she is not ready for marriage as she needs to continue her higher studies-Boy committed suicide-Girl went in depression and admitted in hospital for mental treatment-Girl gradually recovered and suddenly THE END.", "review_by": "Udham" },
				{ "Customer_Review": "3 ", "review_comment": "Awesome book . Liked it very much .The content Was very nice but the alphabhet size is a bit small but not a problem .", "review_by": "Sam" }]
			},
			{	"id":7,	
				"title": "Harry Potter And The Cursed Child Parts 1 And 2", "author": " J.K. Rowling", "language": "English", "description": "Based on an original new story by J.K. Rowling, John Tiffany and Jack Thorne, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London's West End on 30th July 2016.It was always difficult being Harry Potter and it isn't much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children.While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.", "image_url":  "app/images/harry.jpg", "price": 261, "Publisher": "Little Brown; First edition (15 June 2006)", "Number_of_Pages": "256", "sold_out": "Yes", "ISBN_10": " 751565350", "ISBN_13": "978-8179922323", "Product_Dimensions": "12.3 x 16.5 x 1.4 cm","purchased":"yes",
				"review_details": [{ "Customer_Review": "4 ", "review_comment": "The story is about a girl who fell in love with a guy-Boy proposed girl for marriage-Girl said she is not ready for marriage as she needs to continue her higher studies-Boy committed suicide-Girl went in depression and admitted in hospital for mental treatment-Girl gradually recovered and suddenly THE END.", "review_by": "Udham" },
				{ "Customer_Review": "3 ", "review_comment": "Awesome book . Liked it very much .The content Was very nice but the alphabhet size is a bit small but not a problem .", "review_by": "Sam" }]
			}

		];


})();
