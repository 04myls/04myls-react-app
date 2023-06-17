import { useState } from "react"
const Form = () => {
    const[city, setCity] = useState<String>('')
  return (
<form>
<input type="text" name="city" placeholder="テスト" onChange={e =>setCity(e.target.value)
} />
{city}
    <button type="submit">Get Weather</button>
</form>
  )
}
export default Form
