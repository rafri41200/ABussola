document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', (event) => {
      if (detail.open) {
        document.querySelectorAll('details').forEach((el) => {
          if (el !== detail) {
            el.open = false;
          }
        });
      }
    });
  });

  