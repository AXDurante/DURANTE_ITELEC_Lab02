import './App.css';

export function Footer() {
    return (
        <section class="greybg">
            <div class="container">
                <div class="row py-4">
                    <div class="text-center text-lg-left col-12 col-lg-2 mb-3">
                        <a href="/"> 
                            <img class="mx-auto d-block img-fluid" width="75px" src="./tropikallogo.png" alt="" />
                        </a>
                        <p class ="text-center text-white"> 
                            <small> Copyright 2023 </small> 
                        </p>
                    </div>
                    
                    <div class="text-left text-lg-left col-12 col-lg-2 mb-3">
                        <span>
                            <p class="text-white font-weight-bold"> TOURISM </p>
                            <p class="text-white mb-2 footer-links"> Business </p>
                        </span>
                    </div>
                    <div class="text-left text-lg-left col-12 col-lg-2 mb-3">
                        <span>
                            <p class="text-white font-weight-bold"> GOVERNMENT AGENCIES </p>
                            <p class="text-white mb-2 footer-links"> TIEZA </p>
                            <p class="text-white mb-2 footer-links"> TPB </p>
                            <p class="text-white mb-2 footer-links"> IA </p>
                            <p class="text-white mb-2 footer-links"> DFP </p>
                            <p class="text-white mb-2 footer-links"> PCSSD </p>
                            <p class="text-white mb-2 footer-links"> PRA </p>
                        </span>
                    </div>

                    <div class="text-left text-lg-left col-12 col-lg-2 mb-3">
                        <span>
                            <p class="text-white font-weight-bold"> SOCIAL MEDIA </p>
                            <p class="text-white mb-2 footer-links"> DOT Facebook </p>
                            <p class="text-white mb-2 footer-links"> Facebook </p>
                            <p class="text-white mb-2 footer-links"> Instagram </p>
                            <p class="text-white mb-2 footer-links"> Youtube </p>
                        </span>
                    </div>

                    <div class="text-left text-lg-left col-12 col-lg-2 mb-3">
                        <article class="pt-2 pt-lg-0 d-flex align-items-center justify-content-center justify-content-lg-start"> 
                            <p class="text-white font-weight-bold"> FOREIGN OFFICES </p>
                        </article>

                        <article>
                            <div class="d-flex align-items-center"> 
                                <img class="pr-2 img-fluid" src="./flags/australia.png" width="30" height="30" alt="australia"/>
                                <p class="text-white mb-2 footer-links"> Australia </p>
                            </div>
                            
                        </article>

                        <article>
                            <div class="d-flex align-items-center"> 
                                <img class="pr-2 img-fluid" src="./flags/china.png" width="30" height="30" alt="china"/>
                                <p class="text-white mb-2 footer-links"> China </p>
                            </div>
                        </article>

                        <article>
                            <div class="d-flex align-items-center"> 
                                <img class="pr-2 img-fluid" src="./flags/germany.png" width="30" height="30" alt="china"/>
                                <p class="text-white mb-2 footer-links"> Germany </p>
                            </div>
                        </article>

                        <article>
                            <div class="d-flex align-items-center"> 
                                <img class="pr-2 img-fluid" src="./flags/japan.png" width="30" height="30" alt="china"/>
                                <p class="text-white mb-2 footer-links"> Japan </p>
                            </div>
                        </article>

                        <article>
                            <div class="d-flex align-items-center"> 
                                <img class="pr-2 img-fluid" src="./flags/korea.png" width="30" height="30" alt="china"/>
                                <p class="text-white mb-2 footer-links"> Korea </p>
                            </div>
                        </article>

                        <article>
                            <div class="d-flex align-items-center"> 
                                <img class="pr-2 img-fluid" src="./flags/russia.png" width="30" height="30" alt="china"/>
                                <p class="text-white mb-2 footer-links"> Russia </p>
                            </div>
                        </article>

                        <article>
                            <div class="d-flex align-items-center"> 
                                <img class="pr-2 img-fluid" src="./flags/taiwan.png" width="30" height="30" alt="china"/>
                                <p class="text-white mb-2 footer-links"> Taiwan </p>
                            </div>
                        </article>

                        <article>
                            <div class="d-flex align-items-center"> 
                                <img class="pr-2 img-fluid" src="./flags/uk.png" width="30" height="30" alt="china"/>
                                <p class="text-white mb-2 footer-links"> UK </p>
                            </div>
                        </article>
                        
                        <article>
                            <div class="d-flex align-items-center"> 
                                <img class="pr-2 img-fluid" src="./flags/USA.png" width="30" height="30" alt="china"/>
                                <p class="text-white mb-2 footer-links"> USA </p>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer;