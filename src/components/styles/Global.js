import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html{
    scroll-behavior: smooth;
    }

    body {
    font-size: 100%;
    font-family: ${({ theme }) => theme.fonts.montserrat}
    }

    img {
    object-fit: cover;
    }

    li {
    list-style: none;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    section,
    footer{
    padding: 4.32875rem 5rem 7.6125rem 5rem;

    @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 7.6125rem 2.5rem 7.6125rem 2.5rem;
    }
    }

    /* ── Scroll-reveal animation system ── */
    [data-reveal] {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    [data-reveal].revealed {
      opacity: 1;
      transform: translateY(0);
    }

    [data-reveal="fade"] {
      transform: none;
    }

    [data-reveal="slide-left"] {
      transform: translateX(-40px);
    }
    [data-reveal="slide-left"].revealed {
      transform: translateX(0);
    }

    [data-reveal="slide-right"] {
      transform: translateX(40px);
    }
    [data-reveal="slide-right"].revealed {
      transform: translateX(0);
    }

    [data-reveal="scale"] {
      transform: scale(0.92);
    }
    [data-reveal="scale"].revealed {
      transform: scale(1);
    }

    /* Stagger children delays */
    [data-reveal-delay="1"] { transition-delay: 0.1s; }
    [data-reveal-delay="2"] { transition-delay: 0.2s; }
    [data-reveal-delay="3"] { transition-delay: 0.3s; }
    [data-reveal-delay="4"] { transition-delay: 0.4s; }
    [data-reveal-delay="5"] { transition-delay: 0.5s; }
    [data-reveal-delay="6"] { transition-delay: 0.6s; }

    /* Highlighted text in About section */
    .highlight {
      color: ${({ theme }) => theme.CTA.primary};
      font-weight: 600;
    }

    /* Better text selection */
    ::selection {
      background: ${({ theme }) => theme.CTA.primary};
      color: #fff;
    }

    /* Reduce motion for accessibility */
    @media (prefers-reduced-motion: reduce) {
      [data-reveal] {
        opacity: 1;
        transform: none;
        transition: none;
      }
    }
`;

export default GlobalStyles;
