import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import GlobalStyles from "../components/styles/GlobalStyles";
import { theme } from "../components/styles/theme";

const variants = {
  hidden: { opacity: 0, x: -300, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 300, y: 0 },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            key={router.route}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "tween" }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
