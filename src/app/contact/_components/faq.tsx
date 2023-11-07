export const FAQ = () => (
  <section className="flex flex-col py-36 px-16 gap-8">
    <h3 className="text-3xl">Autres Contact</h3>
    <ul className="flex flex-col gap-10">
      <OtherContactItem />
      <OtherContactItem />
      <OtherContactItem />
      <OtherContactItem />
    </ul>
  </section>
);

const OtherContactItem = () => (
  <li className="flex flex-col">
    <h4 className="text-xl">Lorem ipsum dolor</h4>
    <p>
      Deleniti debitis aspernatur quidem totam distinctiovitae nihil provident
      alias et quaerat fugiat dolore.
    </p>
  </li>
);
