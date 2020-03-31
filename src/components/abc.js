import React from 'react';
import cabin from '../assets/Portfolio/cabin.png' 
import cake from '../assets/Portfolio/cake.png'
import circus from '../assets/Portfolio/circus.png'
import game from '../assets/Portfolio/game.png'
import safe from '../assets/Portfolio/safe.png' 
import submarine from '../assets/Portfolio/submarine.png'

const Portfolio = () => {
	return (
		<div>

		  <section class="page-section portfolio" id="portfolio">
		  	{/* Portfolio Heading */}
		  	<div class="container">
		      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

		      {/* Icon Divider */}
		      <div class="divider-custom">
		        <div class="divider-custom-line"></div>
		        <div class="divider-custom-icon">
		          <i class="fa fa-star"></i>
		        </div>
		        <div class="divider-custom-line"></div>
		      </div>

		      {/* Portfolio Grid Items */}
		      <div class="row">

		        {/* Portfolio Item 1 */}
		        <div class="col-md-6 col-lg-4">
		          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
		            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
		              <div class="portfolio-item-caption-content text-center text-white">
		                <i class="fa fa-plus fa-3x"></i>
		              </div>
		            </div>
		            <img class="img-fluid" src={cabin} alt=""/>
		          </div>
		        </div>

		        {/* Portfolio Item 2 */}
		        <div class="col-md-6 col-lg-4">
		          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
		            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
		              <div class="portfolio-item-caption-content text-center text-white">
		                <i class="fa fa-plus fa-3x"></i>
		              </div>
		            </div>
		            <img class="img-fluid" src={cake} alt=""/>
		          </div>
		        </div>

		        {/*Portfolio Item 3*/}
		        <div class="col-md-6 col-lg-4">
		          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
		            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
		              <div class="portfolio-item-caption-content text-center text-white">
		                <i class="fa fa-plus fa-3x"></i>
		              </div>
		            </div>
		            <img class="img-fluid" src={circus} alt=""/>
		          </div>
		        </div>

		        {/* Portfolio Item 4 */}
		        <div class="col-md-6 col-lg-4">
		          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
		            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
		              <div class="portfolio-item-caption-content text-center text-white">
		                <i class="fa fa-plus fa-3x"></i>
		              </div>
		            </div>
		            <img class="img-fluid" src={game} alt=""/>
		          </div>
		        </div>

		        {/* Portfolio Item 5 */}
		        <div class="col-md-6 col-lg-4">
		          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
		            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
		              <div class="portfolio-item-caption-content text-center text-white">
		                <i class="fa fa-plus fa-3x"></i>
		              </div>
		            </div>
		            <img class="img-fluid" src={safe} alt=""/>
		          </div>
		        </div>

		        {/* Portfolio Item 6 */}
		        <div class="col-md-6 col-lg-4">
		          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
		            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
		              <div class="portfolio-item-caption-content text-center text-white">
		                <i class="fa fa-plus fa-3x"></i>
		              </div>
		            </div>
		            <img class="img-fluid" src={submarine} alt=""/>
		          </div>
		        </div>

		      </div>
		    </div>
		  </section>

		</div>
	);
}

export default Portfolio;