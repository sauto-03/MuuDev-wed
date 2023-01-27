
function br(count) {
  for (var i = 0; i <= count; i++) {
    return (
      <br />
    );
  }
}

export default function Espace({ sizeEspace }) {

  switch (sizeEspace) {
    case 1:
      return (
        <br />
      );
      break;
    case 2:
      return (
        <>
          <br />
          <br />
        </>
      );
      break;

    case 3:
      return (
        <>
          <br />
          <br />
          <br />
        </>
      );
      break;

    case 4:
      return (
        <>
          <br />
          <br />
          <br />
          <br />
        </>
      );
      break;

    case 5:
      return (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      );
      break;

    case 6:
      return (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      );
      break;

    case 7:
      return (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      );
      break;

    case 10:
      return (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        </>
      );
      break;


  }
}