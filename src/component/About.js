import React from "react";

function About() {
  return (
    <div className="about">
      <div className="aboutPage">
        <h1>FIFA WORLD CUP</h1>
        <h2>HISTORY</h2>
        <p>
          The FIFA World Cup is the most prestigious football competition in the world.
          It is also the most watched sporting event in the world having a viewership of <a href="https://worldsoccertalk.com/2022/05/04/how-many-people-watch-the-world-cup/">562 million</a> during the 2022 finals.
          Played every four years, the World Cup hosts the top 32 national teams in a monthlong tournament.
          The host country is selected by FIFA's Council.
          The FIFA World Cup was first held in 1930, when FIFA, the world's football governing body, decided to stage an international men's 
          football tournament under the era of FIFA president Jules Rimet who put this idea into place.
        </p>
        <h2>AWARDS</h2>
        <h5>GOLDEN BALL</h5>
        <p>
          First introduced in 1982, the 'Golden Ball' is presented to the best player at a FIFA World Cup tournament. Discover the winners of the prestigious prize. Each FIFA World Cup concludes with a
          selection of awards given to players who have
          distinguished themselves during the competition.
        </p>
        <p>
          <span id="bold">Argentina's</span> Lionel Messi became the only man to win the Award twice, in 2014 and 2022.
        </p>
        <h5>GOLDEN BOOT</h5>
        <p>
          The trophy is a sculpture of a football boot. From its inception in the 1967–68 season, the award, originally called "Soulier d'Or", which translates from French as Golden Shoe or Boot,
          has been given to the top goalscorer in all European leagues during a season.
        </p>
        <p>
          Just Fontaine from <span id="bold">France</span> holds the record for most scored goals at the event having scored 13 goals during the 1958 tournament.
        </p>
        <h5>GOLDEN GLOVES</h5>
        <p>
          The Golden Gloves award has been given to the top performing goalkeepThe 'Golden Glove Award' is presented to the most outstanding goal keeper at each FIFA World Cup finals. This best goalkeeper award was first presented in 1994, at the time called the Lev Yashin Award.
          The award was named in honor of the late and legendary Russian goalkeeper, Lev Yashin.er of the tournament since 1994.
        </p>
        <h5>BEST YOUNG PLAYER</h5>
        <p>
          Players 21 years old and younger are eligible for the Best Young Player award.

          As of November 2022, Northern Ireland's Norman Whiteside was the youngest player to ever play in a World Cup,
          aged 17 years and 40 days when he played against Yugoslavia in 1982.
        </p>
      </div>
      <div className="trophyImg">
        <img src="/trophy.png" alt="world cup png"></img>
      </div>
    </div>
  )
}

export default About;