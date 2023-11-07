import React, { useState, useEffect } from 'react'
function MyEvents() {

    var numClicks = 0;

    function handleRefresh() {
        numClicks = numClicks + 1;
        if (numClicks == 1) {
            
            var elms = document.querySelectorAll("[id='klaus']");
            for(var i = 0; i < elms.length; i++) 
                elms[i].style.opacity = '0'
            var temp = document.getElementById('special');
            temp.textContent = "no time conflicts detected";
        }
        if (numClicks == 2) { 
            var elms = document.querySelectorAll("[id='ferst']");
            for(var i = 0; i < elms.length; i++) 
                elms[i].style.opacity = '0'
        }
        
        

    }
  return (
    <div>
        <button id="refresh" onClick={() => handleRefresh()}> refresh </button>
        <h1> Your Events </h1>
        <ol>
            <li id="tech">party at tech green</li>
            <li id ="ferst">dancing at ferst</li>
            <li id ="klaus">studying at klaus </li>

        </ol>
        <h1> Time Conflicts </h1>
        <ol>
            <li id ="special">dancing at ferst</li>
            <li id ="klaus">studying at klaus</li>

        </ol>
    </div>
  )
}

export default MyEvents