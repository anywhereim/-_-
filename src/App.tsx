import Tooltip from "./components/ToolTip";

function App() {
  return (
    <div>
      <div className="first-section">
        <section className="container-basic">
          <div className="TL">
            <Tooltip
              tooltipContent={<p>top-left</p>}
              position="top-left"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">top-left</p>
            </Tooltip>
          </div>
          <div className="Top">
            <Tooltip
              tooltipContent={<p>top-middle</p>}
              position="top-middle"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">top-middle</p>
            </Tooltip>
          </div>
          <div className="TR">
            <Tooltip
              tooltipContent={<p>top-right</p>}
              position="top-right"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">top-right</p>
            </Tooltip>
          </div>
          <div className="RT">
            <Tooltip
              tooltipContent={<p>right-top</p>}
              position="right-top"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">right-top</p>
            </Tooltip>
          </div>
          <div className="RM">
            <Tooltip
              tooltipContent={<p>right-middle</p>}
              position="right-middle"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">right-middle</p>
            </Tooltip>
          </div>
          <div className="RB">
            <Tooltip
              tooltipContent={<p>right-bottom</p>}
              position="right-bottom"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">right-bottom</p>
            </Tooltip>
          </div>
          <div className="LT">
            <Tooltip
              tooltipContent={<p>left-top</p>}
              position="left-top"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">left-top</p>
            </Tooltip>
          </div>
          <div className="Left">
            <Tooltip
              tooltipContent={<p>left-middle</p>}
              position="left-middle"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">left-middle</p>
            </Tooltip>
          </div>
          <div className="LB">
            <Tooltip
              tooltipContent={<p>left-bottom</p>}
              position="left-bottom"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">left-bottom</p>
            </Tooltip>
          </div>
          <div className="BL">
            <Tooltip
              tooltipContent={<p>bottom-left</p>}
              position="bottom-left"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">bottom-left</p>
            </Tooltip>
          </div>
          <div className="Bottom">
            <Tooltip
              tooltipContent={<p>bottom-middle</p>}
              position="bottom-middle"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">bottom-middle</p>
            </Tooltip>
          </div>
          <div className="BR">
            <Tooltip
              tooltipContent={<p>bottom-right</p>}
              position="bottom-right"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">bottom-right</p>
            </Tooltip>
          </div>
        </section>

        <section className="portal__section">
          <div className="TL">
            <Tooltip
              tooltipContent={<p>top-left</p>}
              position="top-left"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">top-left</p>
            </Tooltip>
          </div>
          <div className="Top">
            <Tooltip
              tooltipContent={<p>top-middle</p>}
              position="top-middle"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">top-middle</p>
            </Tooltip>
          </div>
          <div className="TR">
            <Tooltip
              tooltipContent={<p>top-right</p>}
              position="top-right"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">top-right</p>
            </Tooltip>
          </div>
          <div className="RT">
            <Tooltip
              tooltipContent={<p>right-top</p>}
              position="right-top"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">right-top</p>
            </Tooltip>
          </div>
          <div className="RM">
            <Tooltip
              tooltipContent={<p>right-middle</p>}
              position="right-middle"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">right-middle</p>
            </Tooltip>
          </div>
          <div className="RB">
            <Tooltip
              tooltipContent={<p>right-bottom</p>}
              position="right-bottom"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">right-bottom</p>
            </Tooltip>
          </div>
          <div className="LT">
            <Tooltip
              tooltipContent={<p>left-top</p>}
              position="left-top"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">left-top</p>
            </Tooltip>
          </div>
          <div className="Left">
            <Tooltip
              tooltipContent={<p>left-middle</p>}
              position="left-middle"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">left-middle</p>
            </Tooltip>
          </div>
          <div className="LB">
            <Tooltip
              tooltipContent={<p>left-bottom</p>}
              position="left-bottom"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">left-bottom</p>
            </Tooltip>
          </div>
          <div className="BL">
            <Tooltip
              tooltipContent={<p>bottom-left</p>}
              position="bottom-left"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">bottom-left</p>
            </Tooltip>
          </div>
          <div className="Bottom">
            <Tooltip
              tooltipContent={<p>bottom-middle</p>}
              position="bottom-middle"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">bottom-middle</p>
            </Tooltip>
          </div>
          <div className="BR">
            <Tooltip
              tooltipContent={<p>bottom-right</p>}
              position="bottom-right"
              tooltipClassName="common__tooltip"
            >
              <p className="common__children">bottom-right</p>
            </Tooltip>
          </div>
        </section>
      </div>

      <section className="delay__section">
        <Tooltip
          position="top-left"
          tooltipClassName="common__tooltip"
          startDelay={1000}
          tooltipContent={<p>enter-delay 1s</p>}
        >
          <p className="another__children">enter-delay 1s</p>
        </Tooltip>
        <Tooltip
          position="top-middle"
          tooltipClassName="common__tooltip"
          delaytime={1000}
          tooltipContent={<p>leave-delay 1s</p>}
        >
          <p className="another__children">leave-delay 1s</p>
        </Tooltip>
        <Tooltip
          position="top-right"
          tooltipClassName="common__tooltip"
          event={true}
          delaytime={1000}
          tooltipContent={<p>hover not hidden</p>}
        >
          <p className="another__children">hover not hidden</p>
        </Tooltip>
      </section>

      <section className="mulit-section">
        <div className="mulitRight">
          <Tooltip
            position="right-middle"
            event={true}
            delaytime={1000}
            tooltipClassName="multi__tooltip"
            tooltipContent={
              <div className="multi__childern__box">
                <p className="multiText">Are you sure to delete this task?</p>
                <button
                  className="button"
                  onClick={() => alert("Button clicked!")}
                >
                  YES
                </button>
              </div>
            }
          >
            <p className="multi_children">right-middle</p>
          </Tooltip>
        </div>
        <div className="multiTop">
          <Tooltip
            position="top-middle"
            tooltipClassName="multi__tooltip"
            event={true}
            delaytime={1000}
            tooltipContent={
              <div className="multi__childern__box">
                <p className="multiText">Are you sure to delete this task?</p>
                <button
                  className="button"
                  onClick={() => alert("Button clicked!")}
                >
                  YES
                </button>
              </div>
            }
          >
            <p className="multi_children">top-middle</p>
          </Tooltip>
        </div>
        <div className="mulitLeft">
          <Tooltip
            tooltipClassName="multi__tooltip"
            position="left-middle"
            event={true}
            delaytime={1000}
            tooltipContent={
              <div className="multi__childern__box">
                <p className="multiText">Are you sure to delete this task?</p>
                <button
                  className="button"
                  onClick={() => alert("Button clicked!")}
                >
                  YES
                </button>
              </div>
            }
          >
            <p className="multi_children">left-middle</p>
          </Tooltip>
        </div>
        <div className="multiBottom">
          <Tooltip
            event={true}
            delaytime={1000}
            position="bottom-middle"
            tooltipClassName="multi__tooltip"
            tooltipContent={
              <div className="multi__childern__box">
                <p className="multiText">Are you sure to delete this task?</p>
                <button
                  className="button"
                  onClick={() => alert("Button clicked!")}
                >
                  YES
                </button>
              </div>
            }
          >
            <p className="multi_children">bottom-middle</p>
          </Tooltip>
        </div>
      </section>
      <section className="custom__section">
        <Tooltip
          tooltipClassName="custom__tooltip__yellow"
          position="bottom-middle"
          tooltipContent={<p className="multiText">yellow</p>}
        >
          <p className="custom__children__yellow">bottom-middle</p>
        </Tooltip>
        <Tooltip
          tooltipClassName="custom__tooltip__pink"
          position="bottom-middle"
          tooltipContent={<p className="multiText">pink</p>}
        >
          <p className="custom__children__pink">bottom-middle</p>
        </Tooltip>
      </section>
      <section className="disable__section">
        <Tooltip
          disable={true}
          disableClassName="disable__button"
          tooltipClassName="disable__tooltip"
          position="bottom-middle"
          tooltipContent={
            <p className="multiText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              asperiores atque
            </p>
          }
        >
          <p className="disable__children">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            asperiores atque
          </p>
        </Tooltip>
      </section>
    </div>
  );
}

export default App;
