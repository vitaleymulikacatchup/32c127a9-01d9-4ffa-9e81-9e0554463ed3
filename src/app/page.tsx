"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Star, Heart, Handshake, HelpCircle, Mail } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://images.pexels.com/photos/34444367/pexels-photo-34444367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Sweet Dreams Bakery Logo"
          brandName="Sweet Dreams Bakery"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Freshly Baked Daily"
          description="Artisan breads, pastries, and custom cakes made with love using traditional techniques and the finest ingredients"
          tag="Est. 1985"
          tagIcon={Award}
          buttons={[
            { text: "Order Online", href: "https://sweetdreamsbakery.com/order" },
            { text: "View Menu", href: "products" }
          ]}
          imageSrc="https://images.pexels.com/photos/564883/pexels-photo-564883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Fresh artisan bread and pastries display"
          className="text-center"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Specialties"
          description="Discover our most popular freshly baked goods, crafted daily with premium ingredients"
          tag="Bestsellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Sweet Dreams",
              name: "Fresh Croissants",
              price: "$3.50",
              rating: 5,
              reviewCount: "124",
              imageSrc: "https://images.pexels.com/photos/7966390/pexels-photo-7966390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Golden fresh croissants"
            },
            {
              id: "2",
              brand: "Sweet Dreams",
              name: "Artisan Sourdough",
              price: "$6.00",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rustic sourdough bread"
            },
            {
              id: "3",
              brand: "Sweet Dreams",
              name: "Danish Pastries",
              price: "$4.25",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/9242434/pexels-photo-9242434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Assorted Danish pastries"
            },
            {
              id: "4",
              brand: "Sweet Dreams",
              name: "Custom Wedding Cakes",
              price: "$125.00",
              rating: 5,
              reviewCount: "67",
              imageSrc: "https://images.pexels.com/photos/10733586/pexels-photo-10733586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant wedding cake"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real reviews from our loyal customers who love our fresh baked goods"
          tag="Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Regular Customer",
              testimonial: "The best bakery in town! Their sourdough bread is absolutely incredible and the croissants are just like the ones I had in Paris. The staff is always friendly and the quality is consistently amazing.",
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Event Planner",
              testimonial: "Sweet Dreams Bakery created the most beautiful wedding cake for my daughter's wedding. Not only was it stunning to look at, but it tasted incredible. All our guests were asking where we got it from!",
              imageSrc: "https://images.pexels.com/photos/7447126/pexels-photo-7447126.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Local Food Blogger",
              testimonial: "As a food blogger, I've tried bakeries all over the city, but Sweet Dreams stands out for their authentic techniques and exceptional ingredients. Their Danish pastries are works of art that taste as good as they look.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Coffee Shop Owner",
              testimonial: "We've been partnering with Sweet Dreams for over two years to supply our coffee shop with fresh pastries. Their reliability, quality, and customer service is unmatched. Highly recommend!",
              imageSrc: "https://images.pexels.com/photos/8440065/pexels-photo-8440065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Local Businesses"
          description="Proudly serving cafes, restaurants, and hotels throughout the city with our premium baked goods"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/5094489/pexels-photo-5094489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4473358/pexels-photo-4473358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1456640/pexels-photo-1456640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about our bakery, orders, and services"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We're open Tuesday through Sunday from 7:00 AM to 7:00 PM. We're closed on Mondays to prepare for the week ahead and give our bakers a well-deserved rest."
            },
            {
              id: "2",
              title: "Do you take custom cake orders?",
              content: "Absolutely! We specialize in custom cakes for weddings, birthdays, and special events. Please place orders at least 1 week in advance for regular cakes and 2-3 weeks for wedding cakes."
            },
            {
              id: "3",
              title: "Do you offer gluten-free options?",
              content: "Yes, we have a selection of gluten-free breads, muffins, and pastries available daily. All gluten-free items are prepared in a dedicated area to prevent cross-contamination."
            },
            {
              id: "4",
              title: "Can I place orders for pickup or delivery?",
              content: "Yes! You can place orders online for pickup, or we offer local delivery within a 5-mile radius for orders over $25. Delivery fees start at $5."
            }
          ]}
          imageSrc="https://images.pexels.com/photos/32459865/pexels-photo-32459865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy bakery interior with warm lighting"
          mediaPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Fresh with Sweet Dreams"
          description="Subscribe to get weekly updates on new products, seasonal specials, and exclusive offers delivered straight to your inbox"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our weekly newsletter. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Products",
              items: [
                { label: "Fresh Bread", href: "products" },
                { label: "Pastries", href: "products" },
                { label: "Custom Cakes", href: "products" },
                { label: "Seasonal Specials", href: "products" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Wedding Cakes", href: "services" },
                { label: "Catering", href: "services" },
                { label: "Corporate Orders", href: "services" },
                { label: "Delivery", href: "services" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Visit Us", href: "contact" },
                { label: "Call Us", href: "tel:555-123-4567" },
                { label: "Email Us", href: "mailto:hello@sweetdreamsbakery.com" },
                { label: "Order Online", href: "https://sweetdreamsbakery.com/order" }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/34444367/pexels-photo-34444367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoWidth={140}
          logoHeight={45}
          copyrightText="© 2025 Sweet Dreams Bakery. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}