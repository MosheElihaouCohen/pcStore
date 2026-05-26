import React from 'react'

export default function ProductDetails() {
  return (
    <div className="product-details container mx-auto my-5 px-2 sm:px-8">
    <div className="grid grid-cols-12 gap-5 rounded-lg bg-white p-2 xs:p-8">
      <div className="col-span-12 max-h-[500px] md:col-span-6">
        <div
          className="swiper swiper-top group relative flex items-center rounded-lg">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img src="img/product/prod-1.jpg" alt="product" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img src="img/product/prod-2.jpg" alt="product" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img src="img/product/prod-3.jpg" alt="product" />
              </div>
            </div>
          </div>
          <div
            className="button-next absolute -right-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:right-4 hover:bg-primary-500 hover:shadow-md">
            &#10095;
          </div>
          <div
            className="button-prev absolute -left-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:left-4 hover:bg-primary-500 hover:shadow-md">
            &#10094;
          </div>
        </div>
        <div className="swiper swiper-thumbs">
          <div className="swiper-wrapper">
            <div className="swiper-slide cursor-pointer rounded-lg">
              <img src="img/product/prod-1.jpg" alt="product" />
            </div>
            <div className="swiper-slide cursor-pointer rounded-lg">
              <img src="img/product/prod-2.jpg" alt="product" />
            </div>
            <div className="swiper-slide cursor-pointer rounded-lg">
              <img src="img/product/prod-3.jpg" alt="product" />
            </div>
          </div>
          <div
            className="button-next absolute -right-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:right-4 hover:bg-primary-500 hover:shadow-md">
            &#10095;
          </div>
          <div
            className="button-prev absolute -left-16 z-20 flex h-10 w-10 select-none items-center justify-center rounded bg-black/30 text-xl text-white shadow transition-all duration-300 group-hover:left-4 hover:bg-primary-500 hover:shadow-md">
            &#10094;
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="my-1">
          <a
            className="line-clamp-2 break-all text-2xl font-medium transition-all duration-300 hover:text-primary-500"
            href="#">
            Ryzen 5 3600x
          </a>
        </div>
        <div className="product-val-stock my-2 flex justify-between">
          <div className="" data-rater="4"></div>
          <div className="ml-auto">
            <span
              className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
              instock
            </span>
          </div>
        </div>
        <div className="my-5 flex items-center gap-5">
          <div
            className="flex rounded-lg bg-white px-3 py-2 text-primary-500 shadow">
            <span className="text-sm">$</span>
            <span className="text-2xl font-semibold leading-7">37.00</span>
          </div>
          <div className="flex flex-col">
            <span className="text-md font-semibold uppercase text-green-400">
              25% Off
            </span>
            <span className="prev-price text-sm text-primary-500 line-through">
              $50.00
            </span>
          </div>
        </div>
        <div className="my-4">
          <p className="line-clamp-5 break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            cupiditate repellat magni exercitationem non, quaerat consequatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            cupiditate.
          </p>
        </div>
        <div className="flex gap-1">
          <form action="javascript:void(0)">
            <div className="block">
              <div className="my-3 flex flex-col gap-1">
                <span className="font-bold">Size:</span>
                <ul className="flex flex-wrap gap-3">
                  <li className="relative">
                    <input
                      className="peer sr-only"
                      type="radio"
                      value=""
                      name="size"
                      id="size1"
                      checked="" />
                    <label
                      className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                      for="size1">
                      S
                    </label>
                  </li>
                  <li className="relative">
                    <input
                      className="peer sr-only"
                      type="radio"
                      value=""
                      name="size"
                      id="size2" />
                    <label
                      className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                      for="size2">
                      M
                    </label>
                  </li>
                  <li className="relative">
                    <input
                      className="peer sr-only"
                      type="radio"
                      value=""
                      name="size"
                      id="size3" />
                    <label
                      className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                      for="size3">
                      L
                    </label>
                  </li>
                  <li className="relative">
                    <input
                      className="peer sr-only"
                      type="radio"
                      value=""
                      name="size"
                      id="size4" />
                    <label
                      className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50 focus:outline-none"
                      for="size4">
                      XL
                    </label>
                  </li>
                </ul>
              </div>
              <div className="my-3 flex gap-2">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="cursor-pointer border-transparent bg-blue-600 text-blue-600 checked:bg-none checked:ring checked:ring-blue-300 focus:ring focus:ring-blue-300 focus:ring-offset-0"
                      name="radio-colors"
                      value="0"
                      checked />
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="cursor-pointer border-transparent bg-red-600 text-red-600 checked:bg-none checked:ring checked:ring-red-300 focus:ring focus:ring-red-300 focus:ring-offset-0"
                      name="radio-colors"
                      value="1" />
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="cursor-pointer border-transparent bg-yellow-600 text-yellow-600 checked:bg-none checked:ring checked:ring-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-0"
                      name="radio-colors"
                      value="2" />
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="cursor-pointer border-transparent bg-black text-black checked:bg-none checked:ring checked:ring-gray-400 focus:ring focus:ring-gray-400 focus:ring-offset-0"
                      name="radio-colors"
                      value="3" />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-start gap-5">
              <div className="counter inline-flex rounded-lg bg-white shadow">
                <input
                  className="counter-value input-number w-12 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:border-none focus:ring-0"
                  type="number"
                  value="0" />
                <div className="flex w-5 flex-col justify-between">
                  <button className="increment text-primary-500" type="button">
                    <i className="bi bi-caret-up-fill pointer-events-none"></i>
                  </button>
                  <button className="decrement text-primary-500" type="button">
                    <i className="bi bi-caret-down-fill pointer-events-none"></i>
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="relative flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                  type="submit">
                  <i
                    className="bi bi-cart-fill relative z-[4] flex text-xl text-white"></i>
                  <span className="relative z-[4] font-bold uppercase text-white">
                    Add to cart
                  </span>
                </button>
                <a
                  className="tippy tippy-wishlist wishlist-button flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-500 p-2 transition-all duration-300 hover:bg-primary-400"
                  href="javascript:void(0)">
                  <i
                    className="bi bi-heart pointer-events-none flex text-white"></i>
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="my-5 flex flex-col gap-2">
          <a
            className="rounded-lg border bg-slate-100 p-2 transition-all duration-300 hover:bg-slate-200"
            href="javascript:void(0)"
            data-target=".modal-shipping">
            <div
              className="pointer-events-none flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <i className="bi bi-truck flex text-2xl text-primary-500"></i>
                <span>Calculate Shipping Cost</span>
              </div>
              <i
                className="bi bi-arrow-right-short flex text-2xl text-primary-500"></i>
            </div>
          </a>
        </div>
        <div className="mt-5 border-t border-gray-200 pt-5">
          <div>
            <b>Categories:</b>
            <span>
              <a href="#" className="text-zinc-500">Hardware</a>
              ,
              <a href="#" className="text-zinc-500">Processors</a>
            </span>
          </div>
          <div className="flex gap-2">
            <b>Share:</b>
            <div className="flex items-center gap-[10px]">
              <a href="#">
                <i
                  className="bi bi-facebook flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
              </a>
              <a href="#">
                <i
                  className="bi bi-twitter-x flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
              </a>
              <a href="#">
                <i
                  className="bi bi-whatsapp flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
              </a>
              <a href="#">
                <i
                  className="bi bi-link-45deg flex text-zinc-500 transition-all duration-300 hover:text-primary-500"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <div
          className="liner-container mb-5 flex border-b-2 border-[rgba(119,119,119,.17)]">
          <h1
            className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-xl font-bold uppercase">
            Specifications
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b>Aplication:</b>
              Desktop
            </span>
          </div>
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b># of CPU cores:</b>
              3.8GHz
            </span>
          </div>
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b>Total L3 cache:</b>
              32MB
            </span>
          </div>
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b># of threads:</b>
              12
            </span>
          </div>
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b>Total L1 cache:</b>
              384KB
            </span>
          </div>
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b>TDP/Default TDP:</b>
              95W
            </span>
          </div>
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b>CPU Socket:</b>
              AM4
            </span>
          </div>
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b>Temp. max:</b>
              95°C
            </span>
          </div>
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b>Product line:</b>
              AMD Ryzen™ 5 Desktop Processors
            </span>
          </div>
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b>Max Magnification Clock:</b>
              Up to 4.4GHz
            </span>
          </div>
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b>Total L2 cache:</b>
              3MB
            </span>
          </div>
          <div className="col-span-12 sm:col-span-1">
            <span>
              <b>Gamer:</b>
              Yes
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <div
          className="liner-container mb-5 flex border-b-2 border-[rgba(119,119,119,.17)]">
          <h1
            className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-xl font-bold uppercase">
            Description
          </h1>
        </div>
        <div className="see-more relative pb-5">
          <div
            className="see-more-container gradient-bottom max-h-[220px] overflow-hidden">
            <div className="see-more-content">
              <p>
                Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                vero cumque, aliquam libero ipsum dolor sit amet consectetur
                adipisicing elit. Unde sapiente quisquam placeat excepturi
                sunt mollitia vero cumque, aliquam libero veniam odit
                inventore totam quis! Hic quis perferendis quaerat enim magni.
              </p>
              <p>
                Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                vero cumque, aliquam libero ipsum dolor sit amet consectetur
                adipisicing elit. Repellat culpa quidem reprehenderit dolor
                aperiam, eius consequatur est deserunt. Nisi nesciunt
                repellendus dolorem quam obcaecati atque animi quas debitis
                qui harum.
              </p>
              <p>
                Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                vero cumque, aliquam libero ipsum, dolor sit amet consectetur
                adipisicing elit. Aut, veritatis. Ea voluptatibus eveniet,
                quam dicta quisquam repellat maxime libero. Enim omnis quis,
                cumque facilis doloremque doloribus tempore expedita quia
                accusantium.
              </p>
              <p>
                Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                vero cumque, aliquam libero ipsum dolor sit amet consectetur
                adipisicing elit. Unde sapiente quisquam placeat excepturi
                sunt mollitia vero cumque, aliquam libero veniam odit
                inventore totam quis! Hic quis perferendis quaerat enim magni.
              </p>
              <p>
                Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                vero cumque, aliquam libero ipsum dolor sit amet consectetur
                adipisicing elit. Repellat culpa quidem reprehenderit dolor
                aperiam, eius consequatur est deserunt. Nisi nesciunt
                repellendus dolorem quam obcaecati atque animi quas debitis
                qui harum.
              </p>
              <p>
                Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                vero cumque, aliquam libero ipsum, dolor sit amet consectetur
                adipisicing elit. Aut, veritatis. Ea voluptatibus eveniet,
                quam dicta quisquam repellat maxime libero. Enim omnis quis,
                cumque facilis doloremque doloribus tempore expedita quia
                accusantium.
              </p>
            </div>
          </div>
          <button
            className="btn-see-more absolute bottom-0 z-10 flex w-full justify-center hover:text-primary-500">
            <i
              className="bi bi-chevron-compact-down flex text-xl transition-all duration-300"></i>
          </button>
        </div>
      </div>
      <div className="col-span-12">
        <div className="tab-container">
          <ul className="flex justify-between">
            <li
              className="tab-item tab-active-1 active w-full cursor-pointer bg-gray-200 p-2 text-center text-gray-400 transition-all duration-300">
              Comments
            </li>
            <li
              className="tab-item tab-active-1 w-full cursor-pointer bg-gray-200 p-2 text-center text-gray-400 transition-all duration-300">
              Reviews
            </li>
          </ul>
          <div className="tab-content mt-5">
            <div
              className="tab-content-item active invisible absolute w-full opacity-0">
              <div className="flex gap-5">
                <div
                  className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                  <img
                    className="h-full w-full object-cover"
                    src="img/comments/profile_1.png"
                    alt="profile_logo" />
                </div>
                <form className="w-full">
                  <div className="h-20">
                    <textarea
                      className="w-full resize-none overflow-y-auto rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                      placeholder="Add a comment..."
                      required></textarea>
                  </div>
                  <button
                    className="relative mt-2 overflow-hidden rounded-lg bg-primary-500 p-2 font-bold text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                    type="submit">
                    <span className="relative z-[4]">Comment</span>
                  </button>
                </form>
              </div>
              <form
                className="my-5 flex flex-col xs:flex-row xs:items-center xs:justify-between">
                <span className="text-lg font-bold uppercase">Comments</span>
                <select
                  className="nice-selectfocus:border-primary-500 focus:ring-0order-by rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2">
                  <option value="0">Most recent</option>
                  <option value="1">Oldest</option>
                </select>
              </form>
              <div className="mt-5 flex gap-5">
                <div
                  className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                  <img
                    className="h-full w-full object-cover"
                    src="img/comments/profile_1.png"
                    alt="profile_logo" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <a className="font-bold hover:text-primary-500" href="#">
                      John Doe
                    </a>
                    <span className="text-xs text-slate-400">2 feb. 11:28am</span>
                  </div>
                  <p className="my-2">
                    Hello, how are you? I am interested in the product. Is
                    there stock available?
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                      <i className="bi bi-reply-fill flex"></i>
                      <span>Reply</span>
                    </div>
                    <div
                      className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                      <i className="bi bi-pencil-square flex"></i>
                      <span>Edit</span>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-5">
                    <div
                      className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                      <img
                        className="h-full w-full object-cover"
                        src="img/comments/profile_2.png"
                        alt="profile_logo" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <a
                          className="font-bold text-blue-400 hover:text-primary-500"
                          href="#">
                          Megabyte
                        </a>
                        <span className="text-xs text-slate-400">Just now</span>
                      </div>
                      <small className="flex items-center gap-1 text-slate-400">
                        <i className="bi bi-reply-fill flex"></i>
                        Responding to
                        <a className="hover:text-primary-500" href="#">
                          John Doe
                        </a>
                      </small>
                      <p className="my-2">
                        Hi John Doe! If there is stock available, any other
                        questions please feel free to contact us, have a nice
                        day.
                      </p>
                      <div className="flex items-center gap-3">
                        <div
                          className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                          <i className="bi bi-reply-fill flex"></i>
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-content-item invisible absolute w-full bg-white opacity-0">
              <div
                className="my-5 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-5xl">4,0</span>
                  <div className="" data-rater="4"></div>
                  <span className="flex items-center gap-1">
                    <i className="bi bi-chat-quote flex"></i>
                    93 Reviews
                  </span>
                </div>
                <div className="w-full max-w-[600px]">
                  <div className="my-2 flex items-center gap-2">
                    <span>5</span>
                    <div
                      className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                      <div
                        className="absolute left-0 top-0 h-full w-[50%] rounded bg-primary-500"></div>
                    </div>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <span>4</span>
                    <div
                      className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                      <div
                        className="absolute left-0 top-0 h-full w-[40%] rounded bg-primary-500"></div>
                    </div>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <span>3</span>
                    <div
                      className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                      <div
                        className="absolute left-0 top-0 h-full w-[30%] rounded bg-primary-500"></div>
                    </div>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <span>2</span>
                    <div
                      className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                      <div
                        className="absolute left-0 top-0 h-full w-[20%] rounded bg-primary-500"></div>
                    </div>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <span>1</span>
                    <div
                      className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                      <div
                        className="absolute left-0 top-0 h-full w-[10%] rounded bg-primary-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div
                  className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                  <img
                    className="h-full w-full object-cover"
                    src="img/comments/profile_1.png"
                    alt="profile_logo" />
                </div>
                <form
                  className="form-review flex w-full flex-col gap-2"
                  method="GET">
                  <div className="flex items-center gap-2">
                    <span className="text-sm uppercase">Your Valoration:</span>
                    <div id="rater"></div>
                    <input
                      name="ratingvalue"
                      className="rating-value hidden"
                      type="number"
                      value="" />
                  </div>
                  <div className="h-20">
                    <textarea
                      name="reviewvalue"
                      className="w-full resize-none overflow-y-auto rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                      placeholder="Add a review..."
                      required></textarea>
                  </div>
                  <div>
                    <button
                      className="relative overflow-hidden rounded-lg bg-primary-500 p-2 font-bold text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                      type="submit">
                      <span className="relative z-[4]">Post review</span>
                    </button>
                  </div>
                </form>
              </div>
              <form
                className="my-5 flex flex-col xs:flex-row xs:items-center xs:justify-between">
                <span className="text-lg font-bold uppercase">Reviews</span>
                <select
                  className="nice-selectfocus:border-primary-500 focus:ring-0order-by rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2">
                  <option value="0">Most recent</option>
                  <option value="1">Oldest</option>
                  <option value="2">5 &#x2605;</option>
                  <option value="3">4 &#x2605;</option>
                  <option value="4">3 &#x2605;</option>
                  <option value="5">2 &#x2605;</option>
                  <option value="6">1 &#x2605;</option>
                </select>
              </form>
              <div className="mt-5 flex gap-5">
                <div
                  className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                  <img
                    className="h-full w-full object-cover"
                    src="img/comments/profile_1.png"
                    alt="profile_logo" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <a className="font-bold hover:text-primary-500" href="#">
                      John Doe
                    </a>
                    <span className="text-xs text-slate-400">2 feb. 11:28am</span>
                  </div>
                  <div className="" data-rater="4"></div>
                  <p className="my-2">
                    Everything perfect, the product arrived impeccable and I
                    had no problem, very satisfied.
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                      <i className="bi bi-pencil-square flex"></i>
                      <span>Edit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
