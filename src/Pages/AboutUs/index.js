// Page created by Priya Thakur (8958634)

import React from "react";
import AboutUsImg from "../../assets/images/about_us.jpeg";
import AboutUsImg2 from "../../assets/images/about_us2.jpg";

function AboutUs() {
  return (
    <main className="container my-5 about-page">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mb-4 text-center">About Us</h1>
          <div className="row mb-5">
            <div className="col-6">
              <img
                className="about-us"
                src={AboutUsImg}
                alt="Cooking with love"
              />
            </div>
            <div className="col-6">
              <img
                className="about-us"
                src={AboutUsImg2}
                alt="Sharing delicious recipes"
              />
            </div>
          </div>

          <p>
            Welcome to <strong>Recipe Vault</strong> — your ultimate destination
            for culinary inspiration! Whether you're a kitchen newbie or a
            seasoned home cook, we’re here to empower your cooking journey with
            hand-picked recipes, expert tips, and a pinch of creativity.
          </p>

          <p>
            Our platform is built by food lovers, for food lovers. We believe
            cooking isn’t just about feeding the body — it’s about nourishing
            the soul, connecting with loved ones, and expressing your
            creativity. At Recipe Vault, we curate recipes from diverse cuisines
            around the world to help you discover new flavors and techniques,
            right from your own kitchen.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to make home cooking simple, fun, and exciting for
            everyone. We strive to be your trusted cooking companion, guiding
            you through every step — from selecting ingredients to plating your
            masterpiece. Through our community and resources, we aim to ignite
            the joy of cooking and make mealtime something to truly look forward
            to.
          </p>

          <h3>Our Vision</h3>
          <p>
            We envision a world where anyone, anywhere, can confidently create
            delicious meals that bring joy to their table. By sharing
            easy-to-follow, delicious recipes and expert tips, we hope to
            inspire millions to embrace the magic of cooking and celebrate food
            as a form of self-expression.
          </p>

          <h3>Our Values</h3>
          <ul>
            <li>
              <strong>Quality:</strong> Every recipe we publish is tested and
              trusted, using fresh, wholesome ingredients to ensure great
              results every time.
            </li>
            <li>
              <strong>Creativity:</strong> We celebrate culinary creativity,
              encouraging experimentation and innovation in every dish.
            </li>
            <li>
              <strong>Inclusivity:</strong> Food is for everyone — we embrace
              all cultures, preferences, and skill levels.
            </li>
            <li>
              <strong>Community:</strong> We’re building a supportive, engaged
              community of food lovers who share, learn, and grow together.
            </li>
            <li>
              <strong>Sustainability:</strong> We promote mindful cooking,
              reducing waste, and embracing seasonal and local ingredients.
            </li>
          </ul>

          <p>
            Thank you for being a part of our journey. Let’s cook, share, and
            inspire together — one recipe at a time.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
