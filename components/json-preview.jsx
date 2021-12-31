import Typing from "react-typing-animation";

export default function jsonPreview() {
  return (
    <pre>
      <Typing startDelay={500}>{'→\n{"spacecraft":"Saturn V"}'}</Typing>
      <Typing startDelay={1200} speed={8}>
        {
          '\n\n←\n{\n\t"name": "Saturn V",\n\t"manufacturer": "NASA",\n\t"origin": "United States",\n\t"mission": "Moon Landing",\n\t"launch_date": "1966-05-25",\n\t"price": {\n\t\t"project": "6417000000.00",\n\t\t"launch": "185000000.00"\n\t},\n\t"missions": [\n\t\t"Apollo 4",\n\t\t"Apollo 6",\n\t\t"Apollo 5",\n\t\t"Apollo 7",\n\t\t"Apollo 8",\n\t\t"Apollo 9",\n\t\t"Apollo 10",\n\t\t"Apollo 11",\n\t\t"Apollo 12",\n\t\t"Apollo 13",\n\t\t"Apollo 14",\n\t\t"Apollo 15",\n\t\t"Apollo 16",\n\t\t"Apollo 17"\n\t]\n}'
        }
      </Typing>
    </pre>
  );
}
