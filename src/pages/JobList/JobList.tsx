import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

type Props = {}

const JobList = (props: Props) => {
  
  useEffect(() => {
    const button = document.querySelectorAll(".btn-filter");
    const listCategory = document.querySelectorAll(".category-list");
    const arrow = document.querySelectorAll(".arrow");
    const menu = document.querySelector(".sort-menu");
    for (let t = 0; t < button.length; t++) {
      const handleClick = () => {
        if (listCategory[t].classList.contains("show")) {
          listCategory[t].className = 'category-list';
          arrow[t].className = 'fa-solid fa-chevron-down arrow';
        } else {
          for (let i = 0; i < button.length; i++) {
            listCategory[i].className = 'category-list';
            arrow[i].className = 'fa-solid fa-chevron-down arrow';
          }
          console.log(arrow[t]);
          listCategory[t].className = 'category-list show';
          arrow[t].className = 'fa-solid fa-chevron-down arrow rotate';
        }
  
      }
      button[t].addEventListener("click", handleClick);
  
      window.addEventListener("click", (e: MouseEvent) => {
        if (!(e?.target as HTMLElement).matches(".btn-filter")) {
          for (let i = 0; i < button.length; i++) {
            listCategory[i].className = 'category-list';
            arrow[i].className = 'fa-solid fa-chevron-down';
          }
        }
  
        if (!(e?.target as HTMLElement).matches(".textbox")) {
          menu?.classList.remove('active');
        }
      })
    }
    menu?.addEventListener("click", () => {
      menu.classList.toggle("active");
    })
  },[])

  const show = (val:string) => {
    const input = document.querySelector('.textbox') as HTMLInputElement;
    input.value = val;
  }
  

  return (
    <div className="joblist">
      <div className="joblist__container width-container">
        <div className="joblist__content">
          <div className="joblist__result">
            <div className="result__title">
              <h2>Results for "design"</h2>
            </div>
            <div className="result__top-bar">
              <div className="top-bar__filter">
                <div className="filter__item">
                  <button className='btn-filter'>Category
                    <span><i className="fa-solid fa-chevron-down arrow"></i></span>
                  </button>
                  <ul className='category-list'>
                    <li><a href="#">All category</a></li>
                    <li><a href="#">T-Shirts & Merchandise</a> <span>(29,316)</span></li>
                    <li><a href="#">Logo Design</a> <span>(222,143)</span></li>
                    <li><a href="#">Website Development</a> <span>(55,207)</span></li>
                    <li><a href="#">Social Media Design</a> <span>(53,864)</span></li>
                  </ul>
                </div>
                <div className="filter__item">
                  <button className='btn-filter'>Service Option
                    <span><i className="fa-solid fa-chevron-down arrow"></i></span>
                  </button>
                  <ul className='category-list'>
                    <li><a href="#">Programming language</a></li>
                    <li><a href="#">HTML & CSS</a> <span>(1,137)</span></li>
                    <li><a href="#">PHP</a> <span>(305)</span></li>
                    <li><a href="#">Javascript</a> <span>(220)</span></li>
                    <li><a href="#">Other</a> <span>(10)</span></li>
                  </ul>
                </div>
                <div className="filter__item">
                  <button className='btn-filter'>Seller Details
                    <span><i className="fa-solid fa-chevron-down arrow"></i></span>
                  </button>
                  <ul className='category-list'>
                    <li><a href="#">Seller Level</a></li>
                    <li><a href="#">Top Rates Seller</a> <span>(146)</span></li>
                    <li><a href="#">Level One</a> <span>(3,464)</span></li>
                    <li><a href="#">Level Two</a> <span>(3,095)</span></li>
                    <li><a href="#">New Seller</a> <span>(23,491)</span></li>
                  </ul>
                </div>
                <div className="filter__item">
                  <button className='btn-filter'>Budget
                    <span><i className="fa-solid fa-chevron-down arrow"></i></span>
                  </button>
                  <ul className='category-list'>
                    <li><a href="#">Budget</a></li>
                    <li><a href="#">Value</a> <span>(129)</span></li>
                    <li><a href="#">Mid-range</a> <span>(1209)</span></li>
                    <li><a href="#">High-end</a> <span>(235)</span></li>
                    <li><a href="#">Custom</a> <span>(2305)</span></li>
                  </ul>
                </div>
                <div className="filter__item">
                  <button className='btn-filter'>Delivery Time
                    <span><i className="fa-solid fa-chevron-down arrow"></i></span>
                  </button>
                  <ul className='category-list'>
                    <li><a href="#">Express 24H</a></li>
                    <li><a href="#">Up to 3 days</a> <span>(129)</span></li>
                    <li><a href="#">Up to 7 days</a> <span>(1209)</span></li>
                    <li><a href="#">Anytime</a> <span>(235)</span></li>
                  </ul>
                </div>
              </div>
              <div className="top-bar__toggle">
                <div className="toggle__item">
                  <label htmlFor="services">
                    <input type="checkbox" id='services'/>
                    <span>
                      <div className="round"></div>
                    </span>
                  </label>
                  <span>Pro services</span>
                </div>
                <div className="toggle__item">
                  <label htmlFor="seller">
                    <input type="checkbox" id='seller'/>
                    <span>
                      <div className="round"></div>
                    </span>
                  </label>
                  <span>Local sellers</span>
                </div>
                <div className="toggle__item">
                  <label htmlFor="online">
                    <input type="checkbox" id='online'/>
                    <span>
                      <div className="round"></div>
                    </span>
                  </label>
                  <span>Online sellers</span>
                </div>
              </div>
            </div>
            <div className="result__sort">
              <div className="result__info">
                <span>30,203 services available</span>
              </div>
              <div className="sort-by">
                <span>Sort by</span>
                <div className="sort-menu">
                  <div className="option">
                    <input type="text" className='textbox' placeholder='Relevance' readOnly />
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                  <div className="menu">
                    <div className="menu-item" onClick={() => show('Relevance')}>Relevance</div>
                    <div className="menu-item" onClick={() => show('Best Selling')}>Best Selling</div>
                    <div className="menu-item" onClick={() => show('Newest Arrivals')}>Newest Arrivals</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="result__services">
              <div className="service__content row">
                <div className="service__col col-xl-3 col-lg-4 col-sm-6">
                  <div className="service__card">
                    <div className="service__img">
                      <img src="./img/cv1.jpg" alt="..." />
                    </div>
                    <div className="service__seller">
                      <img src="./img/seller1.jpg" alt="seller" />
                      <div className="seller-info">
                        <div className="seller-name">
                          <span>shahmirfaisal</span>
                        </div>
                        <span>Level 2 Seller</span>
                      </div>
                    </div>
                    <div className="service__info">
                      <NavLink to={'/detail/1'}>I will fix HTML CSS and js related issues</NavLink>
                      <div className="service__rate">
                        <span className='star'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="#ffbe5b" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                        </span>
                        <span className='number-star'>5.0</span>
                        <span className='amount-rate'>(129)</span>
                      </div>
                    </div>
                    <div className="service__footer">
                      <div className="heart">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                      </div>
                      <div className="service__price">
                        <span>STARTING AT</span>
                        <span className='price'>US$20</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service__col col-xl-3 col-lg-4 col-sm-6">
                  <div className="service__card">
                    <div className="service__img">
                      <img src="./img/cv2.jpg" alt="..." />
                    </div>
                    <div className="service__seller">
                      <img src="./img/seller2.jpg" alt="seller" />
                      <div className="seller-info">
                        <div className="seller-name">
                          <span>shahmirfaisal</span>
                        </div>
                        <span>Level 2 Seller</span>
                      </div>
                    </div>
                    <div className="service__info">
                      <NavLink to={'/detail/1'}>I will fix HTML CSS and js related issues</NavLink>
                      <div className="service__rate">
                        <span className='star'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="#ffbe5b" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                        </span>
                        <span className='number-star'>5.0</span>
                        <span className='amount-rate'>(129)</span>
                      </div>
                    </div>
                    <div className="service__footer">
                      <div className="heart">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                      </div>
                      <div className="service__price">
                        <span>STARTING AT</span>
                        <span className='price'>US$20</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service__col col-xl-3 col-lg-4 col-sm-6">
                  <div className="service__card">
                    <div className="service__img">
                      <img src="./img/cv3.jpg" alt="..." />
                    </div>
                    <div className="service__seller">
                      <img src="./img/seller3.jpg" alt="seller" />
                      <div className="seller-info">
                        <div className="seller-name">
                          <span>shahmirfaisal</span>
                        </div>
                        <span>Level 2 Seller</span>
                      </div>
                    </div>
                    <div className="service__info">
                      <NavLink to={'/detail/1'}>I will fix HTML CSS and js related issues</NavLink>
                      <div className="service__rate">
                        <span className='star'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="#ffbe5b" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                        </span>
                        <span className='number-star'>5.0</span>
                        <span className='amount-rate'>(129)</span>
                      </div>
                    </div>
                    <div className="service__footer">
                      <div className="heart">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                      </div>
                      <div className="service__price">
                        <span>STARTING AT</span>
                        <span className='price'>US$20</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service__col col-xl-3 col-lg-4 col-sm-6">
                  <div className="service__card">
                    <div className="service__img">
                      <img src="./img/cv4.jpg" alt="..." />
                    </div>
                    <div className="service__seller">
                      <img src="./img/seller4.jpg" alt="seller" />
                      <div className="seller-info">
                        <div className="seller-name">
                          <span>shahmirfaisal</span>
                        </div>
                        <span>Level 2 Seller</span>
                      </div>
                    </div>
                    <div className="service__info">
                      <NavLink to={'/detail/1'}>I will fix HTML CSS and js related issues</NavLink>
                      <div className="service__rate">
                        <span className='star'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="#ffbe5b" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                        </span>
                        <span className='number-star'>5.0</span>
                        <span className='amount-rate'>(129)</span>
                      </div>
                    </div>
                    <div className="service__footer">
                      <div className="heart">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                      </div>
                      <div className="service__price">
                        <span>STARTING AT</span>
                        <span className='price'>US$20</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service__col col-xl-3 col-lg-4 col-sm-6">
                  <div className="service__card">
                    <div className="service__img">
                      <img src="./img/cv3.jpg" alt="..." />
                    </div>
                    <div className="service__seller">
                      <img src="./img/seller3.jpg" alt="seller" />
                      <div className="seller-info">
                        <div className="seller-name">
                          <span>shahmirfaisal</span>
                        </div>
                        <span>Level 2 Seller</span>
                      </div>
                    </div>
                    <div className="service__info">
                      <NavLink to={'/detail/1'}>I will fix HTML CSS and js related issues</NavLink>
                      <div className="service__rate">
                        <span className='star'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="#ffbe5b" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                        </span>
                        <span className='number-star'>5.0</span>
                        <span className='amount-rate'>(129)</span>
                      </div>
                    </div>
                    <div className="service__footer">
                      <div className="heart">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                      </div>
                      <div className="service__price">
                        <span>STARTING AT</span>
                        <span className='price'>US$20</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination">
              <ul>
              <li className='pagination-arrow'><i className="fa-solid fa-chevron-left"></i></li>
                <li className="page-number active">1</li>
                <li className="page-number">2</li>
                <li className="page-number">3</li>
                <li className="page-number">4</li>
                <li className="page-number">5</li>
                <li className="page-number">6</li>
                <li className="page-number">7</li>
                <li className="page-number">8</li>
                <li className="page-number">9</li>
                <li className="page-number">10</li>
                <li className='pagination-arrow'><i className="fa-solid fa-chevron-right"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobList
