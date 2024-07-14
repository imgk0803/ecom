function Single(){
    return(
        <><section className="flex flex-col gap-2 p-2 h-screen">
                   <h2 className="text-center p-3">Happy Shopping</h2>
                   <p className="text-center text-sm mx-auto w-[500px]">Crafted with precision and care, our products deliver unmatched quality and reliability.Experience innovative design and exceptional performance, tailored to meet your needs.Discover the perfect blend of style and functionality.</p>
        <div className="container flex flex-row items-center gap-5 mt-5">
              <div className="grid grid-cols-4 grid-rows-3 w-1/3 p-1 gap-1 ">
                 <img className="row-start-1 row-span-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAAKlBMVEXQ0NDv7+/a2trd3d3X19fV1dXR0dHu7u7r6+vj4+Pn5+fk5OTg4ODz8/OYz9jzAAADh0lEQVR4nO2cCZaqQAxFOwyCtrX/7X6F/h6QGqHG5N0NkPsqQbC0fn4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBjGYeiG8Va6jDIM94lIKSJ6dPIi6Ke3+R+KfmUlMM4b+5W+dE0Z6b/l3z3wKF1VNp6HxV+YhcyAQf8VQOnKsjAY7F/8lq4tB5PZXw2li0vP06xPNJWuLjk3mz5RV7q+1PSmm98K+w/Bh339Ven6EnOz3P0kDMBgb3+ie+kK09I59LnfAHRP/juYPwNaP/0F+Evvf+f9j/krwOjyf5auMDGzXZ/9G9Ddsf6l60tNJ/z53zEA3Nvf0QD8l9/eAGPp4jJgfgVUzF/+/hhN+szf/T7ovwEWo//qAM0IKEkbYIfHIDVLuPVtGB9Kbexl3Pn2dL/zPE3z/OiFrf2Gm5A9TwAAAAAAAAAAAAAQE7nfpy0MQjaSDAxidtK0rLtLYgMYRO2lHvjsLcoMYLu1KjCA3c6yvA742liXFsDxdwWiAtD8rEJSB2h/VSInANPfKoUEYPxXqYwOsPypVkIAFn0JI2DXZ98BDn3uATj1eY+Ajz7jDvDS5xuApz7XEfDXZ9kBAfocAwjS5zcCofr1d0DQxk2wfvUB9CH1ndCnukegVwELdE6/5g5Yjobxre+kfsUB/D8awqu+0/q+F8jO52AgnwW6ol9nB2zORXLXd0m/ygD256I46ruo775Adr5OxbIv0HX92jrgcCiYrb4I+pUFoDsUyFhfFH3bBbKjPRLOtECx9OvpAMOJePr6oulXE4D5RCxNfRH19RfIjuU8xOMCxdWvoQOsx0F+1xdZv4IAXMfB7eqLrv99gew4DgPdL1AK/bId4NTf1pdEv2gAzrMQF7qk+lRuBDxW/826QOn0SwXgqb8GkFK/zAj4Nf9Kl1SfSnSA9+ovuA4NvkzuAML005N5BGrTp7wdUKF+zgCq1M83AiF3/qzkCaDO1V/IEUDF+jlGoNrmX0kdQM2rv5A2gOr1045A5c2/ki6A+ld/IVUAjeinGoFW9ClNBzSknyKApvTjj0Bb+hS7A5rTjxtAg/oxR6BFfYrXAY3qxwqgWf04I9CuPsXogKb1rwfQuP7VEWhdn651AAP9KwGw0D8/Ajz06WwHsNE/FwAj/TMjwEmfwjuAmX5oAOz0w0aAnz6FdMBTsaT0b4UBAAAAAAAAAAAAQAn+AbOEPMfu5+RNAAAAAElFTkSuQmCC" alt="" />
                 <img className="row-start-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAAKlBMVEXQ0NDv7+/a2trd3d3X19fV1dXR0dHu7u7r6+vj4+Pn5+fk5OTg4ODz8/OYz9jzAAADh0lEQVR4nO2cCZaqQAxFOwyCtrX/7X6F/h6QGqHG5N0NkPsqQbC0fn4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBjGYeiG8Va6jDIM94lIKSJ6dPIi6Ke3+R+KfmUlMM4b+5W+dE0Z6b/l3z3wKF1VNp6HxV+YhcyAQf8VQOnKsjAY7F/8lq4tB5PZXw2li0vP06xPNJWuLjk3mz5RV7q+1PSmm98K+w/Bh339Ven6EnOz3P0kDMBgb3+ie+kK09I59LnfAHRP/juYPwNaP/0F+Evvf+f9j/krwOjyf5auMDGzXZ/9G9Ddsf6l60tNJ/z53zEA3Nvf0QD8l9/eAGPp4jJgfgVUzF/+/hhN+szf/T7ovwEWo//qAM0IKEkbYIfHIDVLuPVtGB9Kbexl3Pn2dL/zPE3z/OiFrf2Gm5A9TwAAAAAAAAAAAAAQE7nfpy0MQjaSDAxidtK0rLtLYgMYRO2lHvjsLcoMYLu1KjCA3c6yvA742liXFsDxdwWiAtD8rEJSB2h/VSInANPfKoUEYPxXqYwOsPypVkIAFn0JI2DXZ98BDn3uATj1eY+Ajz7jDvDS5xuApz7XEfDXZ9kBAfocAwjS5zcCofr1d0DQxk2wfvUB9CH1ndCnukegVwELdE6/5g5Yjobxre+kfsUB/D8awqu+0/q+F8jO52AgnwW6ol9nB2zORXLXd0m/ygD256I46ruo775Adr5OxbIv0HX92jrgcCiYrb4I+pUFoDsUyFhfFH3bBbKjPRLOtECx9OvpAMOJePr6oulXE4D5RCxNfRH19RfIjuU8xOMCxdWvoQOsx0F+1xdZv4IAXMfB7eqLrv99gew4DgPdL1AK/bId4NTf1pdEv2gAzrMQF7qk+lRuBDxW/826QOn0SwXgqb8GkFK/zAj4Nf9Kl1SfSnSA9+ovuA4NvkzuAML005N5BGrTp7wdUKF+zgCq1M83AiF3/qzkCaDO1V/IEUDF+jlGoNrmX0kdQM2rv5A2gOr1045A5c2/ki6A+ld/IVUAjeinGoFW9ClNBzSknyKApvTjj0Bb+hS7A5rTjxtAg/oxR6BFfYrXAY3qxwqgWf04I9CuPsXogKb1rwfQuP7VEWhdn651AAP9KwGw0D8/Ajz06WwHsNE/FwAj/TMjwEmfwjuAmX5oAOz0w0aAnz6FdMBTsaT0b4UBAAAAAAAAAAAAQAn+AbOEPMfu5+RNAAAAAElFTkSuQmCC" alt="" />
                 <img className="row-start-3 row-span-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAAKlBMVEXQ0NDv7+/a2trd3d3X19fV1dXR0dHu7u7r6+vj4+Pn5+fk5OTg4ODz8/OYz9jzAAADh0lEQVR4nO2cCZaqQAxFOwyCtrX/7X6F/h6QGqHG5N0NkPsqQbC0fn4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBjGYeiG8Va6jDIM94lIKSJ6dPIi6Ke3+R+KfmUlMM4b+5W+dE0Z6b/l3z3wKF1VNp6HxV+YhcyAQf8VQOnKsjAY7F/8lq4tB5PZXw2li0vP06xPNJWuLjk3mz5RV7q+1PSmm98K+w/Bh339Ven6EnOz3P0kDMBgb3+ie+kK09I59LnfAHRP/juYPwNaP/0F+Evvf+f9j/krwOjyf5auMDGzXZ/9G9Ddsf6l60tNJ/z53zEA3Nvf0QD8l9/eAGPp4jJgfgVUzF/+/hhN+szf/T7ovwEWo//qAM0IKEkbYIfHIDVLuPVtGB9Kbexl3Pn2dL/zPE3z/OiFrf2Gm5A9TwAAAAAAAAAAAAAQE7nfpy0MQjaSDAxidtK0rLtLYgMYRO2lHvjsLcoMYLu1KjCA3c6yvA742liXFsDxdwWiAtD8rEJSB2h/VSInANPfKoUEYPxXqYwOsPypVkIAFn0JI2DXZ98BDn3uATj1eY+Ajz7jDvDS5xuApz7XEfDXZ9kBAfocAwjS5zcCofr1d0DQxk2wfvUB9CH1ndCnukegVwELdE6/5g5Yjobxre+kfsUB/D8awqu+0/q+F8jO52AgnwW6ol9nB2zORXLXd0m/ygD256I46ruo775Adr5OxbIv0HX92jrgcCiYrb4I+pUFoDsUyFhfFH3bBbKjPRLOtECx9OvpAMOJePr6oulXE4D5RCxNfRH19RfIjuU8xOMCxdWvoQOsx0F+1xdZv4IAXMfB7eqLrv99gew4DgPdL1AK/bId4NTf1pdEv2gAzrMQF7qk+lRuBDxW/826QOn0SwXgqb8GkFK/zAj4Nf9Kl1SfSnSA9+ovuA4NvkzuAML005N5BGrTp7wdUKF+zgCq1M83AiF3/qzkCaDO1V/IEUDF+jlGoNrmX0kdQM2rv5A2gOr1045A5c2/ki6A+ld/IVUAjeinGoFW9ClNBzSknyKApvTjj0Bb+hS7A5rTjxtAg/oxR6BFfYrXAY3qxwqgWf04I9CuPsXogKb1rwfQuP7VEWhdn651AAP9KwGw0D8/Ajz06WwHsNE/FwAj/TMjwEmfwjuAmX5oAOz0w0aAnz6FdMBTsaT0b4UBAAAAAAAAAAAAQAn+AbOEPMfu5+RNAAAAAElFTkSuQmCC" alt="" />
                 <img className="row-start-1 row-span-full col-start-2 col-span-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAAKlBMVEXQ0NDv7+/a2trd3d3X19fV1dXR0dHu7u7r6+vj4+Pn5+fk5OTg4ODz8/OYz9jzAAADh0lEQVR4nO2cCZaqQAxFOwyCtrX/7X6F/h6QGqHG5N0NkPsqQbC0fn4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBjGYeiG8Va6jDIM94lIKSJ6dPIi6Ke3+R+KfmUlMM4b+5W+dE0Z6b/l3z3wKF1VNp6HxV+YhcyAQf8VQOnKsjAY7F/8lq4tB5PZXw2li0vP06xPNJWuLjk3mz5RV7q+1PSmm98K+w/Bh339Ven6EnOz3P0kDMBgb3+ie+kK09I59LnfAHRP/juYPwNaP/0F+Evvf+f9j/krwOjyf5auMDGzXZ/9G9Ddsf6l60tNJ/z53zEA3Nvf0QD8l9/eAGPp4jJgfgVUzF/+/hhN+szf/T7ovwEWo//qAM0IKEkbYIfHIDVLuPVtGB9Kbexl3Pn2dL/zPE3z/OiFrf2Gm5A9TwAAAAAAAAAAAAAQE7nfpy0MQjaSDAxidtK0rLtLYgMYRO2lHvjsLcoMYLu1KjCA3c6yvA742liXFsDxdwWiAtD8rEJSB2h/VSInANPfKoUEYPxXqYwOsPypVkIAFn0JI2DXZ98BDn3uATj1eY+Ajz7jDvDS5xuApz7XEfDXZ9kBAfocAwjS5zcCofr1d0DQxk2wfvUB9CH1ndCnukegVwELdE6/5g5Yjobxre+kfsUB/D8awqu+0/q+F8jO52AgnwW6ol9nB2zORXLXd0m/ygD256I46ruo775Adr5OxbIv0HX92jrgcCiYrb4I+pUFoDsUyFhfFH3bBbKjPRLOtECx9OvpAMOJePr6oulXE4D5RCxNfRH19RfIjuU8xOMCxdWvoQOsx0F+1xdZv4IAXMfB7eqLrv99gew4DgPdL1AK/bId4NTf1pdEv2gAzrMQF7qk+lRuBDxW/826QOn0SwXgqb8GkFK/zAj4Nf9Kl1SfSnSA9+ovuA4NvkzuAML005N5BGrTp7wdUKF+zgCq1M83AiF3/qzkCaDO1V/IEUDF+jlGoNrmX0kdQM2rv5A2gOr1045A5c2/ki6A+ld/IVUAjeinGoFW9ClNBzSknyKApvTjj0Bb+hS7A5rTjxtAg/oxR6BFfYrXAY3qxwqgWf04I9CuPsXogKb1rwfQuP7VEWhdn651AAP9KwGw0D8/Ajz06WwHsNE/FwAj/TMjwEmfwjuAmX5oAOz0w0aAnz6FdMBTsaT0b4UBAAAAAAAAAAAAQAn+AbOEPMfu5+RNAAAAAElFTkSuQmCC" alt="" />
              </div>
              <div className="w-1/4 flex flex-col gap-1 h-full">
                 <h3 className="">Brand</h3>
                <p className=" text-gray-600">product</p>
                <p className="break-words text-xs">hfhhghfghjkfddkhgjkdhjghdfhgdgdhgfhdhgkdhfghdfgdhgkhdghdfkjhhhhhhhhhhhhhhgkffhkgdhgfhehghehgerghjegjhehgdjfgeghejhgeg</p>
                 <div>
                   <span className="fa fa-star checked "></span>
                   <span className="fa fa-star checked"></span>
                   <span className="fa fa-star checked"></span>
                   <span className="fa fa-star"></span>
                   <span className="fa fa-star"></span>
                   <span>(100k)</span>
                </div>
              <span className="">$100</span>
              <button className="text-start text-xs text-white w-16 border bg-black rounded-lg">add to cart</button>
              </div>
        </div>
      
        </section>
       
        </>
    )
}
export default Single;