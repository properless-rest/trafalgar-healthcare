
import Article from "./Article.jsx";

import { articleData } from "./articles-data.js";

import rectangle from "./static/rectangle.png";

import "./Articles.css";


export default function Articles() {
    const articleElems = articleData.map((article, index) => <Article key={index} {...article} />)
    return (
        <section className="section-articles">
            <h3 className="articles-title">Check out our&nbsp;latest article</h3>
            <img className="img-separator" src={rectangle} alt="Rectangle separator" />
            <div className="articles-grid">
                <img class="visibility bg-dots6" src="figures/dots6.png" alt="dots6" />
                {articleElems}
            </div>
            <button className="articles-btn">View all</button>
        </section>
    );
}
