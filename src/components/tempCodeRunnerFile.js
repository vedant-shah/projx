Math.floor(
        (element.deadline.getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      ) >= 0