import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const WithInView = (props) => {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ ref, inView }) => {
        let { initial, animate, variants } = props.children.props;
        if (variants) {
          initial = variants.initial;
          animate = variants.animate;
        }
        let render = { ...props.children };
        render.ref = ref;
        // delete render.props.variants
        // console.log("render", render.props.animate);
        // render.props.animate = inView ? animate : initial;
        // console.log("initial", initial);
        // console.log("animate", animate);


        // console.log(initial, animate, render);

        return <> {render}</>;
      }}
    </InView>
  );
};

export default WithInView;
