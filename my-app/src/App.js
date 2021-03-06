import logo from './logo.svg';
import './App.css';

function App() {
  return (

<div className="App">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>

<head>
    <title>Jinhan(Jeremy) Han Full-Stack Portfolio</title>
</head>

<body>

    {/*navi */}
    <nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div class="container topnav">
            {/* Brand and toggle get grouped for better mobile display */}
            <div class="navbar-header">
                
                <a class="navbar-brand topnav" href="#home">Jinhan Han</a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                   <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            {/* navbar-collapse */}
        </div>
        {/* container */}
    </nav>


    {/* Header */}
    <a name="home"></a>
    <div class="intro-header">
      <div class="bg-overlay">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">
                        <h1>Jinhan (Jeremy) Han</h1>
                        <h2>SWE Portfolio</h2>
                      
                        <h3>Full-stack/Mobile app/Data support</h3>
                        <hr class="intro-divider"/>
                        <ul class="list-inline intro-social-buttons">
                            
                            <li>
                                <a href="https://github.com/Jinhan-Han-Jeremy" target="_blank" class="btn btn-default btn-lg "><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jinhan-jeremy-han/" target="_blank" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        {/* container */}
      </div>
    </div>
    {/* intro-header */}

    {/* Page Content */}

	<a  name="about"></a>
    <div class = "content-section-a">
      <div class="bg-overlay2">
        <div class="container">
            <div class="row">

                <div class="col-lg-5 col-sm-9" align="left">
                    
                        <h2 class="section-heading">Software engineer Jinhan Han</h2>
                        <p class="lead"> Major : Computational mathematics <br />
                                    Minor : Computer science<br />
                                    I'm a web designer, Android developer, data supporter engineer in the USA.
                                    I am graduating San Jose State University in May 2022. I have studied developing web applications and computer languages.<br /><br />
                                    Interested Fields:<br /> Full-stack engineer, Blockchain System, Cloud engineer and Big Data analysis<br /><br />
                                    My strengths : I like to develop applications and I don't hesitate learning new technologies.<br />
                                    Also, consistant learning gives me various wisdoms to develop new things. 
                        </p>
                        
                    </div>


                    <div class="col-lg-5 col-lg-offset-2 col-sm-6 collapse navbar-collapse">
                        <img class="resume_photo" src="https://media-exp1.licdn.com/dms/image/C4E03AQEIR7L929JTFQ/profile-displayphoto-shrink_800_800/0/1594965461640?e=1655942400&v=beta&t=Vs4BZjMXNtiGM3X7hG5zsHLP3gJl40DaMU5v0S2zc9A" alt=""/>
                    </div>

              </div>
          </div>
        {/*container */}
        </div>
    </div>


        <div class="content-section-b">
          <div class="bg-overlay3">
            <div class="container">
                <div class="row">

                      <div class="col-lg-5 col-sm-9" align="left">
                    
                      <h2 class="section-heading1">My Software Skill Sets</h2>
                      <hr class="intro-divider"/>
        <div class="bar learning" data-skill="Android XML/Java"></div>
        <div class="bar learning1" data-skill="AWS/Linux"></div>
        <div class="bar back basic" data-skill="Python"></div>
        <div class="bar back intermediate" data-skill="MySQL/PSQL"></div>
        <div class="bar front advanced" data-skill="CSS3"></div>
        <div class="bar front expert" data-skill="HTML"></div>
        <div class="bar front expert2" data-skill="Node.js"></div>
                  
                    </div>
                    <div class="col-lg-5 col-lg-offset-2 col-sm-6 collapse navbar-collapse">
                        <img class="skill_map" src="https://pbs.twimg.com/media/FQ5-czcVcAE7g1s?format=jpg&name=900x900" alt=""/>
                    </div>
                </div>

            </div>
        {/*container */}
          </div>
        </div>


     {/* Portfolio Grid Section */}
      <a  name="portfolio"></a>
        <section id="portfolio" class="bg-light-gray bounds">
            <div class="container">
                
                <div class="row">

                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading">Awesomeness Portfolio.</h2>
                        <h3>Below you'll find some of my recent work.</h3>
                    </div>
                </div>

          {/* Portfolio img1 */}
                <div class="row">
                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a href="https://codepen.io/ThiagoFerreir4/full/gpvJOK" target="_blank" class="portfolio-link" data-toggle="modal">
                            <div class="portfolio-hover">

                            </div>
                            <img src="https://68.media.tumblr.com/a4a06b925ad2ad936ba2ce6c3343c444/tumblr_nwh4epTtMV1ud7rr3o1_1280.jpg" class="img-responsive" alt=""/>
                        </a>
                        <div class="portfolio-caption">
                            <h4>Twitch.tv API project</h4>
                            <p >Bootstrap and Angularjs</p>
                        </div>
                    </div>
              {/* End of Portfolio img1 */}
              
              
              {/* Portfolio img2 */}
                    <div class="col-md-4 col-sm-6 portfolio-item portfolio2">
                        <a href="https://codepen.io/ThiagoFerreir4/full/vOyXre" class="portfolio-link" target="_blank" data-toggle="modal">
                            <div class="portfolio-hover">

                            </div>
                            <img src="https://40.media.tumblr.com/a73e79ce9844761d7cdc93d202b5cea1/tumblr_nwh4iomduD1ud7rr3o1_1280.jpg" class="img-responsive" alt=""/>
                        </a>
                        <div class="portfolio-caption">
                            <h4>Wikipedia Search Engine</h4>
                            <p >Bootstrap and jQuery</p>
                        </div>
                    </div>
                  {/* End of Portfolio img2 */}
              
                  {/* Portfolio img3 */}
                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a href="https://codepen.io/ThiagoFerreir4/full/QbKWGO" target="_blank" class="portfolio-link" data-toggle="modal">
                        
                          <div class="portfolio-hover">

                            </div>
                            <img src="https://68.media.tumblr.com/5abea52ea28e9ea20ab995ebd23299a1/tumblr_nwh4iomduD1ud7rr3o2_1280.jpg" class="img-responsive" alt=""/>
                        </a>
                  
                        <div class="portfolio-caption">
                            <h4>Stainless Steel Calculator</h4>
                            <p >SCSS and Vanilla Javascript</p>
                        </div>
                    </div>
              {/* End of Portfolio img3 */}
              
              {/* Portfolio img4 */}
                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a href="https://codepen.io/ThiagoFerreir4/full/vOaRQz/" target="_blank" class="portfolio-link" data-toggle="modal">
                            <div class="portfolio-hover">

                            </div>
                            <img src="https://40.media.tumblr.com/7512ad23b7e68304a65182988b9c804a/tumblr_nwy76xfEXi1ud7rr3o1_1280.png" class="img-responsive" alt=""/>
                        </a>
                        <div class="portfolio-caption">
                            <h4>Pomodoro Timer Zipline</h4>
                            <p >Bootstrap and Angular.js</p>
                        </div>
                    </div>
              {/* End of Portfolio img4 */}
              
              {/* Portfolio img5 */}
                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a href="https://codepen.io/ThiagoFerreir4/full/oXwKJV" target="_blank" class="portfolio-link" data-toggle="modal">
                            <div class="portfolio-hover">

                            </div>
                            <img src="https://68.media.tumblr.com/59b50efb8f7435fef9f87fd871b90d7a/tumblr_nxhm4k1jI81ud7rr3o1_1280.jpg" class="img-responsive" alt=""/>
                        </a>
                        <div class="portfolio-caption">
                            <h4>Weather App</h4>
                            <p >Bootstrap and Vanilla Javascript</p>
                        </div>
                    </div>
              {/* End of Portfolio img5 */}


              {/* Portfolio img6 */}
                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a href="https://codepen.io/ThiagoFerreir4/full/EjwGoX/" target="_blank" class="portfolio-link" data-toggle="modal">
                            <div class="portfolio-hover">

                            </div>
                            <img src="https://68.media.tumblr.com/030b4966650a0d1dac0bbcca6fe572e8/tumblr_nxhm7qz6Y91ud7rr3o1_1280.jpg" class="img-responsive" alt=""/>
                        </a>
                        <div class="portfolio-caption">
                            <h4>Pacman Tic Tac Toe</h4>
                            <p>CSS and jQuery</p>
                        </div>
                    </div>
              {/* End of Portfolio img6 */}
                </div>
            
            </div>
        </section>




	    <a  name="contact"></a>
        <div class="banner">
          <div class="bg-overlay4">
            <div class="container">         
                <div class="row">
                    <div class="col-lg-6" align="left">
                      <h2> E-mail : jeremy.han.data@gmail.com<br/>
                      <p>Phone : 415-730-9025</p>
                      
                        </h2>
                    </div>
                  <br />
      
                    <div class="col-lg-6">
                        <ul class="list-inline banner-social-buttons">
                        
                                <li>
                                    <a href="https://github.com/Jinhan-Han-Jeremy" target="_blank" class="btn btn-default btn-lg "><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/jinhan-jeremy-han/" target="_blank" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                                </li>
                      
                        </ul>
                    </div>
            </div>
          {/*container */}
          </div>
          </div>
        </div>


        {/* banner */}
        {/* Footer */}
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="list-inline">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li class="footer-menu-divider">&sdot;</li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li class="footer-menu-divider">&sdot;</li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li class="footer-menu-divider">&sdot;</li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                        <p class="copyright text-muted small">jeremy.han.data@gmail.com / Jinhan Han 2022</p>
                    </div>
                </div>
            </div>
        </footer>

  </body>

</div>
);

}

export default App;
