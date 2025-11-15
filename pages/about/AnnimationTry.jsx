import * as motion from "motion/react-client"
import Link from "next/link"

export default function AnimationTry() {
    return (
        <motion.div   animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 4 }} className="text-center">
            <Link
                href="/about"
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-block mt-7"
              
              >
                Read More About Us
              </Link>
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */

// const box = {
//     width: 100,
//     height: 100,
//     backgroundColor: "#f5f5f5",
//     borderRadius: 5,
// }
