import FunctionContext from "./FunctionContext";
import { ThemeProvider } from "./ThemeContext";

export default function App() {

  return (
    <>
      <ThemeProvider>
        <FunctionContext></FunctionContext>
      </ThemeProvider>
    </>
  )
}