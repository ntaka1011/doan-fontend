import React from "react";

const choiceSize = () => {
  return (
    <>
      <p className="text-[28px] font-medium text-center">Hướng dẫn chọn size</p>
      <div className="px-[15px] flex gap-[15px] mb-[30px]">
        <div className="w-[50%] mt-[15px]">
          <p className="text-sm font-bold mb-[10px]">
            Hướng dẫn chọn size giày( theo chiều dài )
          </p>
          <p className="text-sm mb-[10px]">
            Để xác định chỉnh xác kích cỡ giày, Quý khách vui lòng xem các bước
            hướng dẫn sau đây :
          </p>
          <div className="flex items-center">
            <img
              src="/images/shoe-length.png"
              alt="LO"
              className="py-[10px] px-3"
            />
            <div className="text-sm">
              1. Đặt chân của Quý khách lên trên một tờ giấy. <br />
              2. Đo theo chiều dài của bàn chân, tính theo centimeters, theo
              chiều từ gót chân đến ngón chân dài nhất trên bàn chân.
              <br /> 3. Tìm theo chiều dài gần nhất tương ứng theo bảng quy đổi
              bên trái, sau đó tìm theo kích thước size giày bên trái theo bảng
              hướng dẫn bên phải.
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th style={{ textAlign: "left" }}>US</th>
                <th style={{ textAlign: "left" }}>EU</th>
                <th style={{ textAlign: "left" }}>UK</th>
                <th style={{ textAlign: "left" }}>CM</th>
              </tr>
              <tr>
                <td>4</td>
                <td>34</td>
                <td>1.5</td>
                <td>21</td>
              </tr>
              <tr>
                <td>4.5</td>
                <td>34.5</td>
                <td>2</td>
                <td>21.5</td>
              </tr>
              <tr>
                <td>5</td>
                <td>35</td>
                <td>2.5</td>
                <td>22</td>
              </tr>
              <tr>
                <td>5.5</td>
                <td>35.5</td>
                <td>3</td>
                <td>22.5</td>
              </tr>
              <tr>
                <td>6</td>
                <td>36</td>
                <td>3.5</td>
                <td>23</td>
              </tr>
              <tr>
                <td>6.5</td>
                <td>37</td>
                <td>4</td>
                <td>23.5</td>
              </tr>
              <tr>
                <td>7</td>
                <td>37.5</td>
                <td>4.5</td>
                <td>24</td>
              </tr>
              <tr>
                <td>7.5</td>
                <td>38</td>
                <td>5</td>
                <td>24.5</td>
              </tr>
              <tr>
                <td>8</td>
                <td>38.5</td>
                <td>5.5</td>
                <td>25</td>
              </tr>
              <tr>
                <td>8.5</td>
                <td>39</td>
                <td>6</td>
                <td>25.5</td>
              </tr>
              <tr>
                <td>9</td>
                <td>39.5</td>
                <td>6.5</td>
                <td>26</td>
              </tr>
              <tr>
                <td>9.5</td>
                <td>40</td>
                <td>7</td>
                <td>26.5</td>
              </tr>
              <tr>
                <td>10</td>
                <td>40.5</td>
                <td>7.5</td>
                <td>27</td>
              </tr>
              <tr>
                <td>10.5</td>
                <td>41</td>
                <td>8</td>
                <td>27.5</td>
              </tr>
              <tr>
                <td>11</td>
                <td>42</td>
                <td>8.5</td>
                <td>28</td>
              </tr>
              <tr>
                <td>11.5</td>
                <td>42.5</td>
                <td>9</td>
                <td>28.5</td>
              </tr>
              <tr>
                <td>12</td>
                <td>43</td>
                <td>9.5</td>
                <td>29</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[50%] mt-[15px]">
          <p className="text-sm font-bold mb-[10px]">
            Hướng dẫn chọn size giày theo chiều ngang ( chiều rộng )
          </p>
          <p className="text-sm mb-[10px]">
            Để xác định chỉnh xác kích cỡ giày, Quý khách vui lòng xem các bước
            hướng dẫn sau đây :
          </p>
          <div className="flex items-center">
            <img
              src="/images/shoe-width.png"
              alt="LO"
              className="py-[10px] px-3"
            />
            <div className="text-sm">
              1. Đặt chân của Quý khách lên trên một tờ giấy. <br />
              2. Đo theo chiều ngang của bàn chân, tính theo millimeters ( mm ),
              tính theo từ vị trí biên đến bề ngang rộng nhất trên bàn chân của
              Quý khách.
              <br /> 3. Tìm theo kích thước size giày từ cột bên phải, sau đó
              tìm theo chiều rộng tương ứng gần nhất theo bảng quy đổi bên trái.
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th style={{ textAlign: "left" }}>Size (US)</th>
                <th style={{ textAlign: "left" }}>Narrow - N or AA</th>
                <th style={{ textAlign: "left" }}>Regular - M or B</th>
                <th style={{ textAlign: "left" }}>Wide - W or C</th>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>5</td>
                <td style={{ textAlign: "left" }}>74.71</td>
                <td style={{ textAlign: "left" }}>77.88</td>
                <td style={{ textAlign: "left" }}>79.46</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>5.5</td>
                <td style={{ textAlign: "left" }}>75.77</td>
                <td style={{ textAlign: "left" }}>78.94</td>
                <td style={{ textAlign: "left" }}>80.52</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>6</td>
                <td style={{ textAlign: "left" }}>76.83</td>
                <td style={{ textAlign: "left" }}>80</td>
                <td style={{ textAlign: "left" }}>81.58</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>6.5</td>
                <td style={{ textAlign: "left" }}>77.89</td>
                <td style={{ textAlign: "left" }}>81.06</td>
                <td style={{ textAlign: "left" }}>82.64</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>7</td>
                <td style={{ textAlign: "left" }}>78.95</td>
                <td style={{ textAlign: "left" }}>82.12</td>
                <td style={{ textAlign: "left" }}>83.7</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>7.5</td>
                <td style={{ textAlign: "left" }}>80.01</td>
                <td style={{ textAlign: "left" }}>83.18</td>
                <td style={{ textAlign: "left" }}>84.76</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>8</td>
                <td style={{ textAlign: "left" }}>81.07</td>
                <td style={{ textAlign: "left" }}>84.24</td>
                <td style={{ textAlign: "left" }}>85.82</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>8.5</td>
                <td style={{ textAlign: "left" }}>82.13</td>
                <td style={{ textAlign: "left" }}>85.3</td>
                <td style={{ textAlign: "left" }}>86.88</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>9</td>
                <td style={{ textAlign: "left" }}>83.19</td>
                <td style={{ textAlign: "left" }}>86.36</td>
                <td style={{ textAlign: "left" }}>87.94</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>9.5</td>
                <td style={{ textAlign: "left" }}>84.25</td>
                <td style={{ textAlign: "left" }}>87.42</td>
                <td style={{ textAlign: "left" }}>89</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>10</td>
                <td style={{ textAlign: "left" }}>85.31</td>
                <td style={{ textAlign: "left" }}>88.48</td>
                <td style={{ textAlign: "left" }}>90.06</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>10.5</td>
                <td style={{ textAlign: "left" }}>86.37</td>
                <td style={{ textAlign: "left" }}>89.54</td>
                <td style={{ textAlign: "left" }}>91.12</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>11</td>
                <td style={{ textAlign: "left" }}>87.43</td>
                <td style={{ textAlign: "left" }}>90.6</td>
                <td style={{ textAlign: "left" }}>92.18</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>11.5</td>
                <td style={{ textAlign: "left" }}>88.49</td>
                <td style={{ textAlign: "left" }}>91.66</td>
                <td style={{ textAlign: "left" }}>93.24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default choiceSize;
