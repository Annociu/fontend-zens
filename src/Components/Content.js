import React, { useState }  from "react";

function Content() {
    const storys = [
        'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
        'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
        'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, "I am going to eat that pussy once Jimmy leaves for school today!"',
        'A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it is either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice,"How much do you want it to be ?"'
    ];
    let currentIndex = 0;
        const [story, setStory] = React.useState(storys[currentIndex]);
        const btnElements = React.useRef(null);
        console.log(story);
    
        function handleStory() {
            const indexCurrentStory = storys.indexOf(story);
            console.log(indexCurrentStory)
            const lengthOfOtherStorys = storys.length - 1;
            if (indexCurrentStory < lengthOfOtherStorys) {
                setStory(storys[indexCurrentStory + 1]);
            } else {
                setStory("That's all the jokes for today! Come back another day!");
                btnElements.current.classList.add("hide")
            }
        }
    
    return(
        <div className="content">
          <div className="content-top">
            <p>A joke a day keeps the doctor away</p>
            <span>If you joke wrong way, your teeth have to pay. (Serious) </span>
          </div>
          <div className="content-bottom" >
            <p>
             {story}
            </p>
          </div>
          <hr />
          <div ref={btnElements} className="content-buttons" >
            <button className="content-funny" onClick={handleStory}>This is Funny!</button>
            <button className="content-notfunny" onClick={handleStory}>This is not Funny.</button>
          </div>
        </div>
        );
    };


export default Content;