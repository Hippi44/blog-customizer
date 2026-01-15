import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	type OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [selectedFont, setSelectedFont] = useState<OptionType | null>(
		fontFamilyOptions[0]
	);
	const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(
		fontSizeOptions[0]
	);
	const [selectedColor, setSelectedColor] = useState<OptionType>(fontColors[0]);
	const [selectedBackgroundColors, setSelectedBackgroundColors] =
		useState<OptionType>(backgroundColors[0]);
	const [selectedContentWidthArr, setSelectedContentWidthArr] =
		useState<OptionType>(contentWidthArr[0]);

	function handleButton() {
		setIsSidebarOpen(!isSidebarOpen);
	}

	function handleOverlayClick() {
		setIsSidebarOpen(false);
	}

	return (
		<>
			<ArrowButton isOpen={isSidebarOpen} onClick={handleButton} />
			{isSidebarOpen && (
				<div
					className={styles.overlay}
					onClick={handleOverlayClick}
					aria-hidden='true'
				/>
			)}
			<aside
				className={`${styles.container} ${
					isSidebarOpen ? styles.container_open : styles.container_close
				}`}>
				<form className={styles.form}>
					<div className={styles.formSection}>
						<Text size={31} weight={800} uppercase={true}>
							Задайте параметры
						</Text>
						<div className={styles.fieldGroup}>
							<Select
								selected={selectedFont}
								options={fontFamilyOptions}
								onChange={setSelectedFont}
								placeholder='Выберите шрифт'
								title='Шрифт'
							/>
						</div>

						<div className={styles.fieldGroup}>
							<RadioGroup
								name='fontSize'
								options={fontSizeOptions}
								selected={selectedFontSize}
								onChange={setSelectedFontSize}
								title='Размер шрифта'
							/>
						</div>

						<div className={styles.fieldGroup}>
							<Select
								selected={selectedColor}
								options={fontColors}
								onChange={setSelectedColor}
								placeholder='Выберите цвет шрифта'
								title='Цвет шрифта'
							/>
						</div>

						<div className={styles.fieldGroup}>
							<Separator />
						</div>

						<div className={styles.fieldGroup}>
							<Select
								selected={selectedBackgroundColors}
								options={backgroundColors}
								onChange={setSelectedBackgroundColors}
								placeholder='Выберите цвет фона'
								title='Цвет фона'
							/>
						</div>

						<div className={styles.fieldGroup}>
							<Select
								selected={selectedContentWidthArr}
								options={contentWidthArr}
								onChange={setSelectedContentWidthArr}
								placeholder='Выберите ширину контента'
								title='Ширина контента'
							/>
						</div>
					</div>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
