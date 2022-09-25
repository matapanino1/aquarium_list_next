import React from "react";
import Location from "./Location";

const Container = ({data}) => {

	const japan = [
		{ "region": "関東", "prefecture": ["東京", "神奈川", "千葉", "埼玉", "茨城", "栃木", "群馬"] },
		{ "region": "北海道・東北", "prefecture": ["北海道", "青森", "岩手", "秋田", "宮城", "山形", "福島"] },
		{ "region": "北信越(山梨)", "prefecture": ["石川", "福井", "富山", "長野", "山梨", "新潟"] },
		{ "region": "東海", "prefecture": ["愛知", "静岡", "岐阜", "三重"] },
		{ "region": "近畿", "prefecture": ["滋賀", "京都", "大阪", "兵庫", "和歌山"] },
		{ "region": "四国・中国", "prefecture": ["香川", "徳島", "愛媛", "高知", "広島", "島根", "鳥取", "山口"] },
		{ "region": "九州・沖縄", "prefecture": ["沖縄", "長崎", "福岡", "佐賀", "大分", "熊本", "鹿児島"] },
	];

	return (
		<div>
			<h1>日本全国水族館一覧</h1>
		{japan.map((list, i) => (
			<Location
				key={i}
				region={list["region"]}
				prefecture={list["prefecture"]}
				 />
		))}
	</div>
  );
};

export default Container;
