// PoolPlay Trivia - Question Bank
// Each array = 1 day of 10 questions
// Fields: q=question, c=[4 choices], a=correct index (0-3), d=difficulty, f=fun fact
// To add a day: copy a day block and paste before the final ];

var QUESTION_BANK = [

// – DAY 1 —————————————
[
{ q: “The Baltimore Colts relocated overnight in 1984. Which city did they move to?”, c: [“Cleveland”, “Indianapolis”, “Nashville”, “St. Louis”], a: 1, d: “Easy”, f: “Owner Robert Irsay moved the franchise using Mayflower moving trucks in March 1984. Baltimore didn’t get another team until the Cleveland Browns relocated there in 1996 as the Ravens.” },
{ q: “Wayne Gretzky was traded to the LA Kings in 1988. Which team did he come from?”, c: [“Calgary Flames”, “Vancouver Canucks”, “Winnipeg Jets”, “Edmonton Oilers”], a: 3, d: “Easy”, f: “Gretzky was traded from the Edmonton Oilers on August 9, 1988. Many Canadians treated it as a national tragedy. The deal transformed hockey’s popularity in California.” },
{ q: “The Chicago Cubs ended their 108-year World Series drought in 2016 by beating which team?”, c: [“Cleveland Indians”, “Chicago White Sox”, “Houston Astros”, “San Francisco Giants”], a: 0, d: “Easy”, f: “The Cubs won Game 7 of the 2016 World Series in Cleveland, coming back from 3-1 down. A rain delay before the final inning became famous.” },
{ q: “Wilt Chamberlain’s 100-point game in 1962 was played in which unusual city?”, c: [“Philadelphia”, “New York”, “Hershey, Pennsylvania”, “Newark”], a: 2, d: “Medium”, f: “The game was played in Hershey, PA on March 2, 1962. Only about 4,000 fans saw it live. No video footage exists.” },
{ q: “The Houston Oilers eventually became which NFL franchise after relocating to Tennessee?”, c: [“Houston Texans”, “Tennessee Titans”, “Jacksonville Jaguars”, “Carolina Panthers”], a: 1, d: “Medium”, f: “The Oilers moved to Tennessee in 1997, first as the Tennessee Oilers before rebranding as the Titans in 1999.” },
{ q: “The Quebec Nordiques relocated in 1995 and won the Stanley Cup their first season in a new city. Where?”, c: [“Dallas”, “Denver”, “Phoenix”, “Minneapolis”], a: 1, d: “Medium”, f: “The Nordiques became the Colorado Avalanche in 1995 and immediately won the Cup - the only relocated NHL franchise to win it in their first season in the new city.” },
{ q: “Michael Jordan retired from the NBA in 1994 to play baseball. Which organization did he sign with?”, c: [“Chicago Cubs”, “Chicago White Sox”, “Atlanta Braves”, “New York Yankees”], a: 1, d: “Medium”, f: “Jordan signed with the Chicago White Sox organization and played for the Double-A Birmingham Barons in 1994, batting .202 in 127 games.” },
{ q: “The Seattle SuperSonics won their only NBA championship in 1979. Who did they defeat?”, c: [“Washington Bullets”, “Phoenix Suns”, “Portland Trail Blazers”, “Los Angeles Lakers”], a: 0, d: “Hard”, f: “The Sonics defeated the Washington Bullets 4-1 with Dennis Johnson winning Finals MVP. The franchise relocated to Oklahoma City in 2008.” },
{ q: “Bo Jackson was drafted first in the 1986 NFL Draft by Tampa Bay. Why didn’t he play for them?”, c: [“He chose baseball over football”, “He was injured”, “Tampa Bay violated his NCAA eligibility”, “He demanded a trade”], a: 2, d: “Hard”, f: “Tampa Bay flew Jackson to a private workout without NCAA permission, costing him his final year of college baseball eligibility. He refused to sign with them as punishment.” },
{ q: “Roger Clemens struck out 20 batters in a single 9-inning game twice. Which two teams did he do it against?”, c: [“Seattle and Detroit”, “New York and Boston”, “Oakland and Cleveland”, “Toronto and Baltimore”], a: 0, d: “Expert”, f: “Clemens fanned 20 against Seattle in 1986 and again against Detroit in 1996 - the only pitcher to do it twice. Kerry Wood later matched the feat once against Houston in 1998.” }
],

// – DAY 2 —————————————
[
{ q: “Who has won the most Masters Tournament titles in golf?”, c: [“Tiger Woods”, “Arnold Palmer”, “Gary Player”, “Jack Nicklaus”], a: 3, d: “Easy”, f: “Jack Nicklaus won 6 Masters titles (1963, 1965, 1966, 1972, 1975, 1986). His final win in 1986 at age 46 is widely considered the greatest round in Masters history.” },
{ q: “Who scored 100 points in a single NBA game?”, c: [“Elgin Baylor”, “Michael Jordan”, “Wilt Chamberlain”, “Jerry West”], a: 2, d: “Easy”, f: “Wilt Chamberlain scored 100 points for the Philadelphia Warriors against the New York Knicks on March 2, 1962.” },
{ q: “Which NFL team won the first ever Super Bowl?”, c: [“Dallas Cowboys”, “Miami Dolphins”, “Kansas City Chiefs”, “Green Bay Packers”], a: 3, d: “Easy”, f: “The Green Bay Packers defeated the Kansas City Chiefs 35-10 in Super Bowl I on January 15, 1967, coached by Vince Lombardi.” },
{ q: “Who holds the MLB record for most career stolen bases?”, c: [“Lou Brock”, “Tim Raines”, “Rickey Henderson”, “Vince Coleman”], a: 2, d: “Medium”, f: “Rickey Henderson stole 1,406 bases over his career - nearly 500 more than Lou Brock who is second on the all-time list with 938.” },
{ q: “Which NCAAB program has the most all-time wins?”, c: [“Duke”, “Kansas”, “North Carolina”, “Kentucky”], a: 3, d: “Medium”, f: “Kentucky has the most wins in NCAA Division I men’s basketball history, with over 2,400 victories.” },
{ q: “Who won the NHL Hart Trophy (MVP) the most times?”, c: [“Mario Lemieux”, “Sidney Crosby”, “Wayne Gretzky”, “Bobby Orr”], a: 2, d: “Medium”, f: “Wayne Gretzky won the Hart Trophy 9 times. He won it in every season from 1980 to 1987, plus 1989.” },
{ q: “Who is the NBA all-time leading scorer?”, c: [“Michael Jordan”, “Kobe Bryant”, “Karl Malone”, “LeBron James”], a: 3, d: “Medium”, f: “LeBron James surpassed Kareem Abdul-Jabbar’s record of 38,387 points on February 7, 2023.” },
{ q: “Which college football team has won the most national championships?”, c: [“Ohio State”, “Notre Dame”, “Oklahoma”, “Alabama”], a: 3, d: “Hard”, f: “Alabama has won the most consensus national championships in the modern era with 10, including a dominant run under Nick Saban from 2009 to 2023.” },
{ q: “How many stitches are on a regulation MLB baseball?”, c: [“88”, “98”, “108”, “118”], a: 2, d: “Hard”, f: “A regulation MLB baseball has exactly 108 double stitches, hand-sewn with red waxed thread. This has been the standard since 1934.” },
{ q: “Which NHL defenseman holds the record for most career points?”, c: [“Bobby Orr”, “Ray Bourque”, “Paul Coffey”, “Denis Potvin”], a: 1, d: “Expert”, f: “Ray Bourque finished with 1,579 career points - the most ever by a defenseman, edging out Paul Coffey’s 1,531.” }
],

// – DAY 3 —————————————
[
{ q: “Which MLB team has won the most consecutive World Series titles?”, c: [“New York Yankees”, “Oakland Athletics”, “Cincinnati Reds”, “Toronto Blue Jays”], a: 0, d: “Easy”, f: “The New York Yankees won 5 consecutive World Series from 1949 to 1953.” },
{ q: “Which QB led the Cleveland Browns to 4 NFL championships in the 1950s?”, c: [“Jim Brown”, “Otto Graham”, “Marion Motley”, “Lou Groza”], a: 1, d: “Easy”, f: “Otto Graham quarterbacked the Browns to 10 championship game appearances in 10 seasons (1946-55), winning 7 titles.” },
{ q: “Which city has hosted the most NBA Finals?”, c: [“Chicago”, “Los Angeles”, “Boston”, “New York”], a: 1, d: “Easy”, f: “Los Angeles has hosted the most NBA Finals games, thanks to the Lakers’ 17 championships and long Finals history.” },
{ q: “Who holds the NFL record for most career rushing yards?”, c: [“Barry Sanders”, “Emmitt Smith”, “Walter Payton”, “Adrian Peterson”], a: 1, d: “Medium”, f: “Emmitt Smith rushed for 18,355 yards over his career with the Cowboys and Cardinals, surpassing Walter Payton’s record in 2002.” },
{ q: “Which NHL team drafted Sidney Crosby first overall in 2005?”, c: [“Ottawa Senators”, “Buffalo Sabres”, “Pittsburgh Penguins”, “Washington Capitals”], a: 2, d: “Medium”, f: “The Pittsburgh Penguins selected Sidney Crosby first overall in 2005, leading to three Stanley Cup championships.” },
{ q: “Who coached the most wins in NCAAB history?”, c: [“Dean Smith”, “Bob Knight”, “Jim Boeheim”, “Mike Krzyzewski”], a: 3, d: “Medium”, f: “Mike Krzyzewski retired in 2022 with 1,202 career wins at Army and Duke, the most in Division I men’s basketball history.” },
{ q: “Which pitcher has the most career strikeouts in MLB history?”, c: [“Randy Johnson”, “Roger Clemens”, “Steve Carlton”, “Nolan Ryan”], a: 3, d: “Medium”, f: “Nolan Ryan struck out 5,714 batters over his 27-year career, nearly 800 ahead of Randy Johnson.” },
{ q: “How many overtime periods can an NHL playoff game have?”, c: [“1”, “2”, “3”, “As many as needed”], a: 3, d: “Hard”, f: “NHL playoff games have unlimited sudden-death overtime periods. The longest went to six overtimes in 1936 between Detroit and the Montreal Maroons.” },
{ q: “Who was the first NBA player drafted out of high school to win Finals MVP?”, c: [“Kevin Garnett”, “Kobe Bryant”, “LeBron James”, “Dwight Howard”], a: 1, d: “Hard”, f: “Kobe Bryant, drafted 13th overall in 1996 from Lower Merion High School, won Finals MVP in 2009 and 2010 with the Lakers.” },
{ q: “What is the only NFL team to go undefeated through an entire season including the Super Bowl?”, c: [“1985 Chicago Bears”, “1989 San Francisco 49ers”, “1972 Miami Dolphins”, “2007 New England Patriots”], a: 2, d: “Expert”, f: “The 1972 Miami Dolphins finished 17-0, the only perfect NFL season. Don Shula coached them to a 14-7 win over Washington.” }
],

// – DAY 4 —————————————
[
{ q: “Which team did Walter Payton spend his entire NFL career with?”, c: [“Pittsburgh Steelers”, “Dallas Cowboys”, “Chicago Bears”, “San Francisco 49ers”], a: 2, d: “Easy”, f: “Walter Payton played all 13 seasons with the Chicago Bears (1975-1987), rushing for 16,726 yards. Known as Sweetness, he won Super Bowl XX.” },
{ q: “Which MLB pitcher won 20 or more games in a season the most times?”, c: [“Cy Young”, “Walter Johnson”, “Christy Mathewson”, “Warren Spahn”], a: 3, d: “Easy”, f: “Warren Spahn won 20 or more games 13 times in his career, including his last at age 42.” },
{ q: “Which NBA team won the most consecutive championships?”, c: [“Los Angeles Lakers”, “Chicago Bulls”, “Boston Celtics”, “Golden State Warriors”], a: 2, d: “Easy”, f: “The Boston Celtics won 8 consecutive NBA championships from 1959 to 1966. Bill Russell anchored every title team.” },
{ q: “Across how many teams did Babe Ruth hit his 714 career home runs?”, c: [“1 team”, “2 teams”, “3 teams”, “4 teams”], a: 2, d: “Medium”, f: “Ruth hit 49 with the Red Sox, 659 with the Yankees, and 6 with the Boston Braves. His 714 stood as the record until Hank Aaron broke it in 1974.” },
{ q: “How many pucks are used in an average NHL game?”, c: [“Around 12”, “Around 20”, “Around 40”, “Around 60”], a: 2, d: “Medium”, f: “An average NHL game uses around 40-50 pucks. Pucks are kept frozen before use so they slide better and bounce less.” },
{ q: “Who holds the record for most points in a single NBA season?”, c: [“Michael Jordan”, “LeBron James”, “Kobe Bryant”, “Wilt Chamberlain”], a: 3, d: “Medium”, f: “Wilt Chamberlain scored 4,029 points in the 1961-62 season - an average of 50.4 per game.” },
{ q: “Which QB won the Super Bowl as the youngest starting QB in history?”, c: [“Tom Brady”, “Ben Roethlisberger”, “Patrick Mahomes”, “Aaron Rodgers”], a: 1, d: “Hard”, f: “Ben Roethlisberger won Super Bowl XL at age 23 years, 11 days - the youngest winning QB in history.” },
{ q: “What is the trophy awarded to the NHL best defenseman?”, c: [“Conn Smythe Trophy”, “Norris Trophy”, “Vezina Trophy”, “Hart Trophy”], a: 1, d: “Hard”, f: “The Norris Trophy goes to the NHL’s best defenseman annually. Bobby Orr won it 8 consecutive times from 1968 to 1975.” },
{ q: “Who holds the NBA record for most rebounds in a single game?”, c: [“Bill Russell”, “Dennis Rodman”, “Kareem Abdul-Jabbar”, “Wilt Chamberlain”], a: 3, d: “Expert”, f: “Wilt Chamberlain grabbed 55 rebounds on November 24, 1960 against the Boston Celtics - the NBA single-game record.” },
{ q: “Who was the first wide receiver to rush for 1,000 yards AND catch 1,000 yards in the same NFL season?”, c: [“Jerry Rice”, “Randy Moss”, “Deion Sanders”, “No one has done it”], a: 3, d: “Expert”, f: “No wide receiver has ever rushed for 1,000 yards and caught 1,000 yards in the same season. It remains unclaimed.” }
],

// – DAY 5 —————————————
[
{ q: “Which city are the Green Bay Packers from?”, c: [“Milwaukee”, “Madison”, “Green Bay”, “Appleton”], a: 2, d: “Easy”, f: “The Green Bay Packers are the only NFL team in Green Bay, Wisconsin - the smallest market in North American major pro sports. They are publicly owned by shareholders.” },
{ q: “Which NBA team did Michael Jordan play for during his six championships?”, c: [“Los Angeles Lakers”, “Boston Celtics”, “Chicago Bulls”, “Miami Heat”], a: 2, d: “Easy”, f: “Michael Jordan won all six of his championships with the Chicago Bulls - three in 1991-93 and three more in 1996-98.” },
{ q: “Which NHL player scored 92 goals in a single season?”, c: [“Mario Lemieux”, “Brett Hull”, “Teemu Selanne”, “Wayne Gretzky”], a: 3, d: “Easy”, f: “Wayne Gretzky scored 92 goals in the 1981-82 season. Brett Hull’s 86 in 1990-91 is third all-time.” },
{ q: “Which MLB team was originally called the Trolley Dodgers?”, c: [“New York Mets”, “Chicago White Sox”, “Boston Red Sox”, “Los Angeles Dodgers”], a: 3, d: “Medium”, f: “The Dodgers were originally the Brooklyn Trolley Dodgers. They moved to Los Angeles in 1958.” },
{ q: “Which NCAAB program won back-to-back national championships in 2024 and 2025?”, c: [“Kansas”, “Duke”, “Connecticut”, “Florida”], a: 2, d: “Medium”, f: “The Connecticut Huskies won back-to-back NCAA championships in 2024 and 2025. Dan Hurley coached both.” },
{ q: “Who is the only player to win NBA MVP, Finals MVP, and Defensive Player of the Year in the same season?”, c: [“LeBron James”, “Hakeem Olajuwon”, “Michael Jordan”, “Giannis Antetokounmpo”], a: 2, d: “Medium”, f: “Michael Jordan won all three awards in 1987-88 - the only player in NBA history to achieve this in one season.” },
{ q: “In what year did the NHL first allow players from the Soviet Union to play?”, c: [“1979”, “1985”, “1989”, “1991”], a: 2, d: “Hard”, f: “The NHL first allowed Soviet players in 1989. Sergei Priakin was the first, followed by Sergei Fedorov and Pavel Bure.” },
{ q: “Which MLB pitcher won the Cy Young Award in both leagues?”, c: [“Pedro Martinez”, “Gaylord Perry”, “Roger Clemens”, “Randy Johnson”], a: 1, d: “Hard”, f: “Gaylord Perry won the Cy Young in the NL with San Diego in 1978 and in the AL with Cleveland in 1972 - the first to win in both leagues.” },
{ q: “Who threw the longest pass completion in NFL history (99 yards)?”, c: [“Patrick Mahomes”, “Aaron Rodgers”, “Multiple QBs have done it”, “Norm Van Brocklin”], a: 2, d: “Expert”, f: “The longest possible pass completion is 99 yards. Multiple QBs have done it, including Patrick Mahomes and Cooper Kupp in 2021.” },
{ q: “Which MLB team has never won a World Series as of 2026?”, c: [“Tampa Bay Rays”, “Seattle Mariners”, “San Diego Padres”, “All of the above”], a: 3, d: “Expert”, f: “The Rays, Mariners, and Padres have all never won a World Series. The Mariners have never even appeared in one.” }
],

// – DAY 6 —————————————
[
{ q: “Which NBA franchise has the most championships of all time?”, c: [“Los Angeles Lakers”, “Chicago Bulls”, “Golden State Warriors”, “Boston Celtics”], a: 3, d: “Easy”, f: “The Boston Celtics have won 18 NBA championships. Their dynasty under Bill Russell (11 titles in 13 years) is the most dominant run in major American pro sports history.” },
{ q: “Who threw for the most yards in a single Super Bowl game?”, c: [“Kurt Warner”, “Tom Brady”, “Patrick Mahomes”, “Joe Montana”], a: 0, d: “Easy”, f: “Kurt Warner threw for 414 yards in Super Bowl XXXIV (2000), leading the Rams to a 23-16 win over the Titans.” },
{ q: “Which MLB team plays in Fenway Park?”, c: [“New York Yankees”, “Tampa Bay Rays”, “Baltimore Orioles”, “Boston Red Sox”], a: 3, d: “Easy”, f: “The Boston Red Sox have played at Fenway Park since 1912, making it the oldest ballpark in MLB. The Green Monster is its most famous feature.” },
{ q: “How many career hat tricks did Wayne Gretzky score in the NHL?”, c: [“30”, “50”, “56”, “70”], a: 1, d: “Medium”, f: “Wayne Gretzky scored 50 career hat tricks. Even removing all his goals, his 1,963 assists alone would still make him the all-time NHL scoring leader.” },
{ q: “Which NFL kicker made the most field goals in league history?”, c: [“Morten Andersen”, “Adam Vinatieri”, “Jason Hanson”, “John Carney”], a: 1, d: “Medium”, f: “Adam Vinatieri made 599 career field goals - the most in NFL history. He won four Super Bowls with the Patriots and Colts.” },
{ q: “Who holds the NCAAB record for most career points?”, c: [“Oscar Robertson”, “Pete Maravich”, “Lionel Simmons”, “Keydren Clark”], a: 1, d: “Medium”, f: “Pete Maravich scored 3,667 points at LSU from 1967-1970 without a three-point line and in only 83 games, averaging 44.2 PPG.” },
{ q: “Which MLB player has the most career RBIs?”, c: [“Hank Aaron”, “Babe Ruth”, “Lou Gehrig”, “Cap Anson”], a: 0, d: “Medium”, f: “Hank Aaron leads all-time with 2,297 RBIs. Cap Anson is second with 2,075, accumulated in the 19th century.” },
{ q: “Who was the first NHL player to score 50 goals in 50 games?”, c: [“Bobby Hull”, “Mike Bossy”, “Wayne Gretzky”, “Maurice Richard”], a: 1, d: “Hard”, f: “Mike Bossy of the New York Islanders scored 50 goals in his first 50 games of the 1980-81 season.” },
{ q: “Which NFL teams were the first two to go 0-16 in a single season?”, c: [“Cleveland Browns only”, “Detroit Lions only”, “Tampa Bay Buccaneers”, “Both Cleveland 2017 and Detroit 2008”], a: 3, d: “Hard”, f: “Both the 2017 Cleveland Browns and 2008 Detroit Lions finished 0-16 - the only two 16-game winless seasons in NFL history.” },
{ q: “What is the lowest batting average ever by an MLB batting champion?”, c: [”.301”, “.309”, “.313”, “.321”], a: 0, d: “Expert”, f: “Carl Yastrzemski won the 1968 AL batting title with a .301 average. That season was called the Year of the Pitcher; Bob Gibson posted a 1.12 ERA.” }
],

// – DAY 7 —————————————
[
{ q: “Which NHL team won the most Stanley Cups in the 1980s?”, c: [“New York Islanders”, “Montreal Canadiens”, “Edmonton Oilers”, “Calgary Flames”], a: 2, d: “Easy”, f: “The Edmonton Oilers won 5 Stanley Cups in 7 years during the 1980s (1984, 1985, 1987, 1988, 1990). Wayne Gretzky, Mark Messier, and Jari Kurri led this dynasty.” },
{ q: “Who was the last player to hit .400 in an MLB season?”, c: [“Rogers Hornsby”, “George Brett”, “Tony Gwynn”, “Ted Williams”], a: 3, d: “Easy”, f: “Ted Williams batted .406 in 1941. He played both games of a doubleheader on the final day to push his average to .406.” },
{ q: “Which team has appeared in the most Super Bowls?”, c: [“Dallas Cowboys”, “San Francisco 49ers”, “Denver Broncos”, “New England Patriots”], a: 3, d: “Easy”, f: “The New England Patriots have appeared in 11 Super Bowls (winning 6), more than any other franchise in NFL history.” },
{ q: “Who was the first player to win the NBA Slam Dunk Contest three times?”, c: [“Michael Jordan”, “Vince Carter”, “Nate Robinson”, “Dominique Wilkins”], a: 2, d: “Medium”, f: “Nate Robinson, standing just 5-foot-9, won the Slam Dunk Contest three times (2006, 2009, 2010) - the most of any player.” },
{ q: “Who holds the MLB record for most consecutive games played?”, c: [“Lou Gehrig”, “Pete Rose”, “Cal Ripken Jr.”, “Steve Garvey”], a: 2, d: “Medium”, f: “Cal Ripken Jr. played 2,632 consecutive games for the Baltimore Orioles from 1982 to 1998, surpassing Lou Gehrig’s record of 2,130.” },
{ q: “Which NBA player has the most career assists?”, c: [“Magic Johnson”, “John Stockton”, “Jason Kidd”, “Steve Nash”], a: 1, d: “Medium”, f: “John Stockton dished out 15,806 career assists with the Utah Jazz - more than 5,000 ahead of second-place Jason Kidd (12,091).” },
{ q: “What was the highest-scoring NHL game ever played?”, c: [“The Canadiens beat Toronto 14-7”, “26 goals total”, “A 13-8 final”, “A 10-10 tie in overtime”], a: 0, d: “Hard”, f: “On January 10, 1920, the Montreal Canadiens defeated the Toronto St. Patricks 14-7, for 21 combined goals - the NHL record.” },
{ q: “Who is the only player to win the NFL MVP award three times with three different teams?”, c: [“Peyton Manning”, “Brett Favre”, “Johnny Unitas”, “No one has done it”], a: 3, d: “Hard”, f: “No player has ever won NFL MVP with three different teams. Peyton Manning won it with Indianapolis (4x) and Denver (once).” },
{ q: “Which NCAAF conference has the most College Football Playoff appearances?”, c: [“Big Ten”, “Pac-12”, “Big 12”, “SEC”], a: 3, d: “Hard”, f: “The SEC has dominated the College Football Playoff era, producing the most appearances and most championships.” },
{ q: “Who holds the record for most career points in NHL playoffs?”, c: [“Mario Lemieux”, “Mark Messier”, “Jari Kurri”, “Wayne Gretzky”], a: 3, d: “Expert”, f: “Wayne Gretzky scored 382 career playoff points (122 goals, 260 assists). His playoff assists alone exceed every other player’s total playoff points.” }
],

// – DAY 8 —————————————
[
{ q: “Which player has won the most NBA championships as a head coach?”, c: [“Red Auerbach”, “Phil Jackson”, “Gregg Popovich”, “Pat Riley”], a: 1, d: “Easy”, f: “Phil Jackson won 11 NBA championships as a head coach - 6 with the Chicago Bulls and 5 with the Los Angeles Lakers.” },
{ q: “Which NFL team drafted Emmitt Smith in 1990?”, c: [“Miami Dolphins”, “Dallas Cowboys”, “Florida Gators”, “Oakland Raiders”], a: 1, d: “Easy”, f: “The Dallas Cowboys selected Emmitt Smith in the first round of the 1990 draft. Smith became the NFL all-time rushing leader and won three Super Bowls.” },
{ q: “What team did Wayne Gretzky play for when he was traded to the LA Kings?”, c: [“Calgary Flames”, “Edmonton Oilers”, “Vancouver Canucks”, “Winnipeg Jets”], a: 1, d: “Easy”, f: “Wayne Gretzky was traded from the Edmonton Oilers to the Los Angeles Kings on August 9, 1988 - dubbed The Trade in Canada.” },
{ q: “Which player has won the most NCAA tournament games as a head coach?”, c: [“Dean Smith”, “Roy Williams”, “Tom Izzo”, “Mike Krzyzewski”], a: 3, d: “Medium”, f: “Mike Krzyzewski won 101 NCAA tournament games - the all-time record. He led Duke to 5 national championships and 12 Final Fours.” },
{ q: “Who holds the NFL record for career receptions?”, c: [“Larry Fitzgerald”, “Jerry Rice”, “Tony Gonzalez”, “Marvin Harrison”], a: 1, d: “Medium”, f: “Jerry Rice holds the career receptions record with 1,549 catches. Larry Fitzgerald is second with 1,432.” },
{ q: “Which MLB team won the World Series in 2016 after a 108-year drought?”, c: [“Boston Red Sox”, “Chicago Cubs”, “Cleveland Indians”, “Houston Astros”], a: 1, d: “Medium”, f: “The Chicago Cubs won the 2016 World Series, ending a 108-year championship drought. They beat Cleveland in 7 games with the decisive game going to extra innings.” },
{ q: “In the 1980 Winter Olympics, how did the US beat Finland to win gold?”, c: [“Mike Eruzione OT goal”, “Mark Johnson overtime goal”, “They won in regulation”, “Shootout victory”], a: 2, d: “Medium”, f: “The US beat Finland 4-2 in regulation for gold. The famous Miracle on Ice was the semifinal against the Soviet Union, won 4-3.” },
{ q: “Who was the first NBA player to have his number retired by the league itself?”, c: [“Wilt Chamberlain”, “Bill Russell”, “Kareem Abdul-Jabbar”, “No one - NBA does not retire numbers league-wide”], a: 1, d: “Hard”, f: “The NBA retired number 6 league-wide in honor of Bill Russell in 2022 - similar to how MLB retired Jackie Robinson’s 42.” },
{ q: “Which NHL team drafted both Mario Lemieux and Sidney Crosby first overall?”, c: [“Ottawa Senators”, “Washington Capitals”, “Pittsburgh Penguins”, “Quebec Nordiques”], a: 2, d: “Hard”, f: “The Pittsburgh Penguins drafted Mario Lemieux first overall in 1984 and Sidney Crosby first overall in 2005 - the only franchise to select two all-time greats both first overall.” },
{ q: “What is the only NFL franchise that has never won a Super Bowl as of 2026?”, c: [“Cleveland Browns”, “Jacksonville Jaguars”, “Houston Texans”, “Detroit Lions”], a: 0, d: “Expert”, f: “The Cleveland Browns are the only NFL franchise that has never appeared in a Super Bowl.” }
],

// – DAY 9 —————————————
[
{ q: “Who holds the record for most Wimbledon singles titles (men)?”, c: [“Roger Federer”, “Pete Sampras”, “Novak Djokovic”, “Rafael Nadal”], a: 0, d: “Easy”, f: “Roger Federer won 8 Wimbledon singles titles - the most in men’s history. He won his first in 2003 and his last in 2017.” },
{ q: “Which NFL team went 16-0 in the regular season but lost the Super Bowl?”, c: [“2007 New England Patriots”, “2015 Carolina Panthers”, “1985 Chicago Bears”, “2019 San Francisco 49ers”], a: 0, d: “Easy”, f: “The 2007 New England Patriots went 16-0 but lost Super Bowl XLII 17-14 to the New York Giants on David Tyree’s famous helmet catch.” },
{ q: “How many MVP awards has LeBron James won in the NBA regular season?”, c: [“3”, “4”, “5”, “6”], a: 1, d: “Easy”, f: “LeBron James has won 4 regular season MVP awards (2009, 2010, 2012, 2013).” },
{ q: “Who is MLB all-time saves leader?”, c: [“Mariano Rivera”, “Lee Smith”, “Trevor Hoffman”, “Billy Wagner”], a: 0, d: “Medium”, f: “Mariano Rivera retired in 2013 with 652 career saves. He is the only player ever unanimously elected to the Baseball Hall of Fame.” },
{ q: “Which NCAAF team has the most all-time wins?”, c: [“Michigan”, “Ohio State”, “Texas”, “Notre Dame”], a: 0, d: “Medium”, f: “The Michigan Wolverines have the most wins in college football history with over 1,000 victories.” },
{ q: “How many career 50-goal seasons did Wayne Gretzky have in the NHL?”, c: [“3”, “5”, “7”, “9”], a: 2, d: “Medium”, f: “Wayne Gretzky scored 50 or more goals in 7 different NHL seasons. His peak was 92 goals in 1981-82.” },
{ q: “Which NBA team has the worst winning percentage in a single season?”, c: [“Philadelphia 76ers”, “Charlotte Bobcats”, “Cleveland Cavaliers”, “New Jersey Nets”], a: 1, d: “Medium”, f: “The 2011-12 Charlotte Bobcats finished 7-59 during the lockout-shortened season, a .106 winning percentage - the worst in NBA history.” },
{ q: “Who threw the ball to Dwight Clark for The Catch in the 1981 NFC Championship?”, c: [“Steve Young”, “Joe Montana”, “John Brodie”, “Jim Harbaugh”], a: 1, d: “Hard”, f: “Joe Montana threw the back-of-the-endzone touchdown pass to Dwight Clark with 51 seconds left, sending the 49ers to Super Bowl XVI.” },
{ q: “What is the record for most home runs hit by a team in a single MLB season?”, c: [“264”, “267”, “270”, “307”], a: 3, d: “Hard”, f: “The 2019 Minnesota Twins hit 307 home runs - the most in a single MLB season, dubbed the Year of the Home Run.” },
{ q: “Who is the only player to win the Heisman Trophy as a true freshman?”, c: [“Barry Sanders”, “Johnny Manziel”, “Archie Griffin”, “Derrick Henry”], a: 1, d: “Expert”, f: “Johnny Manziel of Texas A&M won the 2012 Heisman Trophy as a redshirt sophomore - the first freshman-eligible player to win the award.” }
],

// – DAY 10 –––––––––––––––––––
[
{ q: “Which city has had NHL teams win the Stanley Cup the most times?”, c: [“Toronto”, “Detroit”, “Montreal”, “Edmonton”], a: 2, d: “Easy”, f: “Montreal has produced the most Stanley Cup champions, with the Canadiens winning 24 Cups.” },
{ q: “Which pitcher holds the MLB record for most career wins after age 40?”, c: [“Nolan Ryan”, “Phil Niekro”, “Cy Young”, “Gaylord Perry”], a: 1, d: “Easy”, f: “Phil Niekro won 121 games after turning 40 - the most in MLB history. The knuckleball allowed him to pitch until age 48.” },
{ q: “Which team has the most Super Bowl wins?”, c: [“Dallas Cowboys”, “San Francisco 49ers”, “Pittsburgh Steelers”, “New England Patriots”], a: 3, d: “Easy”, f: “The New England Patriots have won 6 Super Bowls - tied with the Pittsburgh Steelers for the most in NFL history.” },
{ q: “Which MLB team has never appeared in a World Series?”, c: [“Tampa Bay Rays”, “Seattle Mariners”, “San Diego Padres”, “Colorado Rockies”], a: 1, d: “Medium”, f: “The Seattle Mariners have never appeared in a World Series - the only MLB franchise that has never made it to the Fall Classic.” },
{ q: “Which NCAAB school did Steph Curry attend?”, c: [“North Carolina”, “Wake Forest”, “Davidson”, “Duke”], a: 2, d: “Medium”, f: “Stephen Curry attended Davidson College, where he became a national sensation leading Davidson to the 2008 Elite Eight as a 10-seed.” },
{ q: “Who holds the NFL record for most career interceptions?”, c: [“Ronnie Lott”, “Rod Woodson”, “Dick Lane”, “Paul Krause”], a: 3, d: “Medium”, f: “Paul Krause recorded 81 career interceptions playing for Washington and Minnesota from 1964 to 1979 - the NFL all-time record.” },
{ q: “Which NHL team has gone the longest without winning a Stanley Cup?”, c: [“Toronto Maple Leafs”, “Vancouver Canucks”, “Buffalo Sabres”, “Edmonton Oilers”], a: 0, d: “Medium”, f: “The Toronto Maple Leafs last won the Stanley Cup in 1967 - a drought of over 58 years and counting.” },
{ q: “Who scored the Stanley Cup-winning goal in Game 7 of the 1994 Finals for the Rangers?”, c: [“Mark Messier”, “Adam Graves”, “Brian Leetch”, “Stephane Matteau”], a: 0, d: “Hard”, f: “Mark Messier scored the cup-clinching goal as the Rangers beat the Canucks 3-2 to win their first Stanley Cup since 1940.” },
{ q: “Who was the first NBA player to average a triple-double for an entire season?”, c: [“Magic Johnson”, “LeBron James”, “Russell Westbrook”, “Oscar Robertson”], a: 3, d: “Hard”, f: “Oscar Robertson averaged 30.8 PPG, 12.5 RPG, and 11.4 APG in 1961-62. Russell Westbrook matched this 54 years later.” },
{ q: “Who was the first MLB player to hit 500 home runs and steal 500 bases?”, c: [“Barry Bonds”, “Willie Mays”, “Hank Aaron”, “No one has done it”], a: 3, d: “Expert”, f: “No player in MLB history has ever hit 500 home runs and stolen 500 bases - it remains one of baseball’s unclaimed statistical feats.” }
],

// – DAY 11 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 11
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 12 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 12
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 13 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 13
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 14 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 14
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 15 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 15
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 16 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 16
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 17 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 17
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 18 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 18
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 19 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 19
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 20 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 20
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 21 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 21
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 22 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 22
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 23 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 23
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 24 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 24
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 25 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 25
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 26 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 26
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 27 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 27
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 28 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 28
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 29 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 29
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 30 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 30
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 31 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 31
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 32 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 32
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 33 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 33
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 34 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 34
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 35 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 35
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 36 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 36
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 37 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 37
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 38 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 38
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 39 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 39
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 40 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 40
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 41 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 41
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 42 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 42
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 43 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 43
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 44 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 44
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 45 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 45
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 46 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 46
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 47 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 47
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 48 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 48
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 49 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 49
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 50 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 50
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 51 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 51
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 52 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 52
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 53 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 53
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 54 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 54
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 55 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 55
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 56 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 56
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 57 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 57
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 58 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 58
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 59 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 59
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 60 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 60
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 61 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 61
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 62 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 62
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 63 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 63
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 64 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 64
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 65 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 65
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 66 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 66
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 67 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 67
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 68 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 68
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 69 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 69
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 70 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 70
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 71 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 71
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 72 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 72
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 73 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 73
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 74 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 74
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 75 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 75
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 76 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 76
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 77 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 77
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 78 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 78
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 79 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 79
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 80 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 80
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 81 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 81
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 82 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 82
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 83 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 83
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 84 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 84
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 85 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 85
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 86 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 86
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 87 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 87
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 88 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 88
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 89 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 89
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 90 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 90
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 91 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 91
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 92 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 92
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 93 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 93
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 94 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 94
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 95 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 95
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 96 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 96
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 97 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 97
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 98 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 98
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 99 –––––––––––––––––––
[
// ADD 10 QUESTIONS FOR DAY 99
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 100 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 100
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 101 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 101
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 102 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 102
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 103 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 103
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 104 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 104
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 105 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 105
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 106 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 106
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 107 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 107
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 108 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 108
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 109 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 109
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 110 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 110
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 111 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 111
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 112 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 112
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 113 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 113
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 114 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 114
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 115 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 115
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 116 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 116
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 117 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 117
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 118 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 118
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 119 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 119
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 120 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 120
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 121 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 121
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 122 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 122
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 123 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 123
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 124 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 124
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 125 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 125
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 126 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 126
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 127 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 127
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 128 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 128
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 129 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 129
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 130 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 130
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 131 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 131
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 132 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 132
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 133 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 133
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 134 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 134
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 135 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 135
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 136 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 136
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 137 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 137
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 138 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 138
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 139 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 139
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 140 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 140
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 141 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 141
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 142 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 142
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 143 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 143
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 144 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 144
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 145 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 145
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 146 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 146
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 147 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 147
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 148 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 148
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 149 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 149
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 150 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 150
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 151 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 151
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 152 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 152
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 153 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 153
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 154 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 154
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 155 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 155
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 156 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 156
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 157 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 157
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 158 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 158
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 159 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 159
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 160 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 160
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 161 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 161
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 162 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 162
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 163 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 163
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 164 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 164
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 165 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 165
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 166 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 166
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 167 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 167
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 168 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 168
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 169 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 169
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 170 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 170
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 171 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 171
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 172 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 172
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 173 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 173
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 174 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 174
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 175 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 175
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 176 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 176
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 177 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 177
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 178 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 178
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 179 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 179
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 180 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 180
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 181 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 181
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 182 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 182
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 183 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 183
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 184 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 184
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 185 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 185
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 186 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 186
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 187 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 187
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 188 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 188
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 189 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 189
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 190 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 190
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 191 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 191
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 192 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 192
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 193 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 193
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 194 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 194
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 195 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 195
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 196 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 196
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 197 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 197
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 198 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 198
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 199 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 199
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 200 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 200
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 201 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 201
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 202 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 202
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 203 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 203
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 204 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 204
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 205 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 205
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 206 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 206
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 207 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 207
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 208 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 208
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 209 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 209
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 210 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 210
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 211 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 211
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 212 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 212
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 213 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 213
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 214 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 214
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 215 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 215
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 216 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 216
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 217 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 217
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 218 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 218
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 219 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 219
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 220 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 220
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 221 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 221
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 222 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 222
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 223 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 223
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 224 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 224
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 225 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 225
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 226 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 226
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 227 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 227
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 228 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 228
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 229 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 229
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 230 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 230
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 231 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 231
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 232 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 232
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 233 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 233
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 234 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 234
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 235 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 235
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 236 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 236
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 237 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 237
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 238 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 238
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 239 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 239
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 240 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 240
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 241 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 241
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 242 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 242
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 243 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 243
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 244 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 244
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 245 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 245
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 246 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 246
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 247 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 247
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 248 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 248
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 249 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 249
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 250 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 250
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 251 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 251
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 252 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 252
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 253 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 253
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 254 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 254
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 255 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 255
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 256 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 256
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 257 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 257
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 258 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 258
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 259 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 259
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 260 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 260
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 261 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 261
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 262 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 262
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 263 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 263
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 264 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 264
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 265 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 265
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 266 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 266
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 267 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 267
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 268 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 268
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 269 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 269
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 270 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 270
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 271 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 271
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 272 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 272
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 273 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 273
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 274 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 274
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 275 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 275
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 276 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 276
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 277 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 277
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 278 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 278
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 279 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 279
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 280 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 280
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 281 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 281
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 282 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 282
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 283 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 283
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 284 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 284
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 285 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 285
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 286 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 286
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 287 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 287
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 288 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 288
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 289 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 289
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 290 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 290
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 291 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 291
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 292 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 292
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 293 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 293
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 294 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 294
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 295 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 295
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 296 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 296
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 297 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 297
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 298 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 298
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 299 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 299
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 300 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 300
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 301 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 301
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 302 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 302
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 303 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 303
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 304 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 304
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 305 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 305
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 306 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 306
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 307 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 307
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 308 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 308
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 309 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 309
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 310 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 310
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 311 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 311
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 312 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 312
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 313 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 313
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 314 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 314
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 315 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 315
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 316 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 316
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 317 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 317
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 318 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 318
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 319 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 319
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 320 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 320
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 321 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 321
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 322 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 322
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 323 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 323
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 324 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 324
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 325 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 325
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 326 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 326
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 327 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 327
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 328 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 328
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 329 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 329
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 330 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 330
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 331 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 331
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 332 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 332
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 333 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 333
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 334 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 334
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 335 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 335
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 336 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 336
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 337 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 337
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 338 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 338
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 339 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 339
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 340 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 340
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 341 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 341
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 342 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 342
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 343 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 343
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 344 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 344
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 345 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 345
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 346 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 346
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 347 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 347
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 348 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 348
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 349 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 349
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 350 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 350
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 351 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 351
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 352 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 352
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 353 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 353
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 354 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 354
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 355 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 355
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 356 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 356
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 357 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 357
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 358 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 358
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 359 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 359
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 360 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 360
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 361 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 361
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 362 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 362
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 363 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 363
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 364 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 364
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
],

// – DAY 365 ———————————––
[
// ADD 10 QUESTIONS FOR DAY 365
// { q: “Your question?”, c: [“A”,“B”,“C”,“D”], a: 0, d: “Easy”, f: “Fun fact.” }
]

];